<?php
/**
 * Add options which configure the plugin.
 *
 * @return void
 * @noinspection PhpUnused
 */
function audio_on_every_block_register_settings() {
    load_plugin_textdomain('audio-on-every-block', false, dirname(plugin_basename(AOEB_PLUGIN)) . '/languages');

    register_setting(
        'audio-on-every-block-group',
        AOEB_OPTIONFIELD,
        'audio_on_every_block_sanitize_from_db'
    );

    add_settings_section(
        'setting_section_id', // ID
        __('Settings', 'audio-on-every-block'), // Title
        null, // Callback
        AOEB_ADMIN_SETTING_PAGE // Page
    );

    add_settings_field(
        'position',
        __('Position of the output in relation to the block content', 'audio-on-every-block'),
        'audio_on_every_block_admin_output_position',
        AOEB_ADMIN_SETTING_PAGE,
        'setting_section_id'
    );
}
add_action('admin_init', 'audio_on_every_block_register_settings');

/**
 * Add menu page for plugin-settings.
 *
 * @return void
 * @noinspection PhpUnused
 */
function audio_on_every_block_admin_menu()
{
    add_options_page(
        esc_html__('Audio on every Block', 'audio-on-every-block'),
        esc_html__('Audio on every Block Settings', 'audio-on-every-block'),
        'manage_options',
        AOEB_ADMIN_SETTING_PAGE,
        'audio_on_every_block_admin_menu_page'
    );
}
add_action('admin_menu', 'audio_on_every_block_admin_menu');

/**
 * Output the settings-page in admin.
 *
 * @return void
 */
function audio_on_every_block_admin_menu_page()
{
    ?>
    <div class="wrap">
        <h1><?php _e('Audio on every Block Settings', 'audio-on-every-block'); ?></h1>
        <form method="post" action="options.php">
            <?php
            // This prints out all hidden setting fields
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
function audio_on_every_block_admin_output_position() {
    $settings = get_option(AOEB_OPTIONFIELD, []);
    if( empty($settings['position']) ) {
        $settings['position'] = '';
    }
    ?>
        <select id="audio-position" name="audio-on-every-block[position]">
            <option value=""></option>
            <option value="above"<?php if( $settings['position'] == 'above' ) { ?> selected<?php } ?>><?php echo __('above', 'audio-on-every-block'); ?></option>
            <option value="below"<?php if( $settings['position'] == 'below' ) { ?> selected<?php } ?>><?php echo __('below', 'audio-on-every-block'); ?></option>
        </select>
    <?php
}

/**
 * Secure the input for each setting on save.
 *
 * @param $input
 * @return array
 * @noinspection PhpMissingReturnTypeInspection
 * @noinspection PhpUnused
 */
function audio_on_every_block_sanitize_from_db( $input ) {
    $new_input = array();
    if( isset( $input['position'] ) )
        $new_input['position'] = sanitize_text_field( $input['position'] );
    return $new_input;
}

/**
 * Add settings-link on plugin-list.
 *
 * @param $links
 * @return mixed
 * @noinspection PhpUnused
 */
function audio_on_every_block_add_settings_link( $links ) {
    $links[] = '<a href="' .
        admin_url( 'options-general.php?page='. AOEB_ADMIN_SETTING_PAGE ) .
        '">' . __('Settings', 'audio-on-every-block') . '</a>';
    return $links;
}
add_filter('plugin_action_links_'.plugin_basename(AOEB_PLUGIN), 'audio_on_every_block_add_settings_link');