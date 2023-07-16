<?php
/**
 * Run uninstall tasks for this Plugin, e.g.:
 * - remove options-entry
 *
 * @package audio-on-every-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Exit if file is not called during uninstall-process.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

delete_option( 'audio-on-every-block' );
