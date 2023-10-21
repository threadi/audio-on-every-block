=== Audio on every block ===
Contributors: threadi
Tags: audio, audio block
Requires at least: 5.8
Tested up to: 6.4
Requires PHP: 7.4
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Stable tag: 1.1.3

== Description ==

Adds the possibility of adding an audio file to each Gutenberg block suitable for this purpose. This allows, for example, the textual content of the block to be read aloud.

The plug-in does not enable the automatic generation of the necessary audio files. The audio file must be created separately and uploaded to the block.

= Features =

* selection of one audio file per block at all Gutenberg Core blocks that allow texts.
* optional specification of a title to the audio file.
* Global option to set position of the audio-file in relation to the block content.
* optional use your own child-theme-template to change the output.

== Installation ==

1. Upload "audio-on-every-block" to the "/wp-content/plugins/" directory.
2. Activate the plugin through the "Plugins" menu in WordPress.
3. Add your audio-files on each Block in Gutenberg.

== Screenshots ==

== Changelog ==

= 1.0.0 =
* Initial commit

= 1.0.1 =
* fix possible error in settings-page
* fix possible error in plugin-list
* Updated compatibility-flag for WordPress 6.0

= 1.0.2 =
* Updated readme
* Updated compatibility-flag for WordPress 6.0.1

= 1.1.0 =
* Added support for navigation-block and media-text
* Updated compatibility-flag for WordPress 6.1

= 1.1.1 =
* Fixed usage of audio-title
* Updates external dependencies
* Updated compatibility-flag for WordPress 6.2

= 1.1.2 =
* Updated compatibility-flag for WordPress 6.3
* Compatible with WordPress Coding Standards

= 1.1.3 =
* Updated compatibility-flag for WordPress 6.4
* Updates external dependencies
* Compatible with WordPress Coding Standards 3.0
