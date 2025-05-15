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

// do nothing if PHP-version is not 8.0 or newer.
if ( PHP_VERSION_ID < 80000 ) { // @phpstan-ignore smaller.alwaysFalse
	return;
}

delete_option( 'audio-on-every-block' );
