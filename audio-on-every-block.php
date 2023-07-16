<?php
/**
 * Plugin Name:       Audio on every Block
 * Description:       Adds the possibility to add an audio-file for each Gutenberg-Block.
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Version:           @@VersionNumber@@
 * Author:            Thomas Zwirner
 * Author URI:        https://www.thomaszwirner.de
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       audio-on-every-block
 *
 * @package audio-on-every-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// save the plugin-path.
const AOEB_PLUGIN = __FILE__;

// set the option-field-name.
const AOEB_OPTIONFIELD = 'audio-on-every-block';

// set the settings-page-name.
const AOEB_ADMIN_SETTING_PAGE = 'audio_on_every_block';

/**
 * Load the following only in WP-admin.
 */
if ( is_admin() ) {
	require_once 'admin/admin.php';
}

/**
 * Adds JavaScript-file for Gutenberg-editor to add the option.
 *
 * @return void
 * @noinspection PhpUnused
 */
function audio_on_every_block_assets(): void {
	wp_enqueue_script(
		'audio-on-every-block-backend-js',
		plugins_url( 'attributes/index.js', AOEB_PLUGIN ),
		array( 'wp-i18n', 'wp-block-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'attributes/index.js' ),
		true
	);
	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations(
			'audio-on-every-block-backend-js',
			'audio-on-every-block',
			plugin_dir_path( AOEB_PLUGIN ) . '/languages/'
		);
	}
}
add_action( 'enqueue_block_editor_assets', 'audio_on_every_block_assets' );

/**
 * Change the output for each block with audioPlayback-setting on rendering.
 *
 * @param string $block_content The content of the block.
 * @param array  $block The block settings as array.
 * @return string
 * @noinspection PhpUnused
 */
function audio_on_every_block_render_block( string $block_content, array $block ): string {
	// get the setting for the position of the audio-file.
	$settings = get_option( AOEB_OPTIONFIELD, array() );
	if ( empty( $settings['position'] ) ) {
		$settings['position'] = '';
	}

	if ( ! empty( $block['attrs'] ) && ! empty( $block['attrs']['audioPlaybackId'] ) ) {
		// set title if available.
		$title = ! empty( $block['attrs']['audioPlaybackTitle'] ) ? $block['attrs']['audioPlaybackTitle'] : '';

		// search for template with output.
		$template = locate_template( 'audio-on-every-block.php', false, false );
		if ( empty( $template ) ) {
			$template = plugin_dir_path( AOEB_PLUGIN ) . 'templates/audio-on-every-block.php';
		}

		// set the output from the template.
		ob_start();
		load_template(
			$template,
			false,
			array(
				'file'  => wp_get_attachment_url( $block['attrs']['audioPlaybackId'] ),
				'title' => $title,
			)
		);
		$output = ob_get_contents();
		ob_end_clean();

		// position the audio-file depending on the setting.
		switch ( $settings['position'] ) {
			case 'below':
				// set output.
				$block_content = $block_content . $output;
				break;
			case 'above':
			default:
				// set output.
				$block_content = $output . $block_content;
				break;
		}
	}
	return $block_content;
}
add_filter( 'render_block', 'audio_on_every_block_render_block', 10, 2 );
