<?php
/**
 * File to handle backend-tasks for this plugin.
 *
 * @package audio-on-every-block
 */

/**
 * Add options which configure the plugin.
 *
 * @return void
 */
function audio_on_every_block_register_settings(): void {
	register_setting(
		'audio-on-every-block-group',
		AOEB_OPTIONFIELD,
		'audio_on_every_block_sanitize_from_db'
	);

	add_settings_section(
		'setting_section_id',
		__( 'Settings', 'audio-on-every-block' ),
		'__return_true',
		AOEB_ADMIN_SETTING_PAGE
	);

	add_settings_field(
		'position',
		__( 'Position of the output in relation to the block content', 'audio-on-every-block' ),
		'audio_on_every_block_admin_output_position',
		AOEB_ADMIN_SETTING_PAGE,
		'setting_section_id'
	);
}
add_action( 'admin_init', 'audio_on_every_block_register_settings' );

/**
 * Add menu page for plugin-settings.
 *
 * @return void
 */
function audio_on_every_block_admin_menu(): void {
	add_options_page(
		esc_html__( 'Audio on every Block', 'audio-on-every-block' ),
		esc_html__( 'Audio on every Block Settings', 'audio-on-every-block' ),
		'manage_options',
		AOEB_ADMIN_SETTING_PAGE,
		'audio_on_every_block_admin_menu_page'
	);
}
add_action( 'admin_menu', 'audio_on_every_block_admin_menu' );

/**
 * Output the settings-page in admin.
 *
 * @return void
 */
function audio_on_every_block_admin_menu_page(): void {
	?>
	<div class="wrap">
		<h1><?php echo esc_html__( 'Audio on every Block Settings', 'audio-on-every-block' ); ?></h1>
		<form method="post" action="<?php echo esc_url( get_admin_url() ); ?>options.php">
			<?php
			settings_fields( 'audio-on-every-block-group' );
			do_settings_sections( 'audio_on_every_block' );
			submit_button();
			?>
		</form>
	</div>
	<?php
}

/**
 * Create selection for audio-position.
 *
 * @return void
 */
function audio_on_every_block_admin_output_position(): void {
	$settings = get_option( AOEB_OPTIONFIELD, array() );
	if ( empty( $settings['position'] ) ) {
		$settings['position'] = '';
	}
	?>
		<select id="audio-position" name="audio-on-every-block[position]">
			<option value=""></option>
			<option value="above"
			<?php
			if ( 'above' === $settings['position'] ) {
				?>
				selected="selected"<?php } ?>><?php echo esc_html__( 'above', 'audio-on-every-block' ); ?></option>
			<option value="below"
			<?php
			if ( 'below' === $settings['position'] ) {
				?>
				selected="selected"<?php } ?>><?php echo esc_html__( 'below', 'audio-on-every-block' ); ?></option>
		</select>
	<?php
}

/**
 * Secure the input for each setting on save.
 *
 * @param array $input List of inputs to secure.
 * @return array
 * @noinspection PhpUnused
 */
function audio_on_every_block_sanitize_from_db( array $input ): array {
	$new_input = array();
	if ( isset( $input['position'] ) ) {
		$new_input['position'] = sanitize_text_field( $input['position'] );
	}
	return $new_input;
}

/**
 * Add settings-link on plugin-list.
 *
 * @param array $links List of options on the plugin.
 * @return array
 * @noinspection PhpUnused
 */
function audio_on_every_block_add_settings_link( array $links ): array {
	$links[] = '<a href="' .
		admin_url( 'options-general.php?page=' . AOEB_ADMIN_SETTING_PAGE ) .
		'">' . __( 'Settings', 'audio-on-every-block' ) . '</a>';
	return $links;
}
add_filter( 'plugin_action_links_' . plugin_basename( AOEB_PLUGIN ), 'audio_on_every_block_add_settings_link' );
