=== Audio on every block ===
Contributors: threadi
Tags: audio, audio block
Requires at least: 5.8
Tested up to: 6.8
Requires PHP: 8.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Stable tag: @@VersionNumber@@

Adds the possibility to add an audio file to each Gutenberg block suitable for this purpose.

== Description ==

Adds the possibility to add an audio file to each Gutenberg block suitable for this purpose. This allows, for example, the textual content of the block to be read aloud.

The plugin does not enable the automatic generation of the necessary audio files. The audio file must be created separately and uploaded to the block.

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

= @@VersionNumber@@ =
- Added custom styles for editor to optimized form fields to choose audio files for blocks
- Set button title if audio file has been chosen
- Update external dependencies
- Updated compatibility-flag for WordPress 6.8
- Plugin now requires PHP 8.0 or newer

[older changes](https://github.com/threadi/audio-on-every-block/blob/master/changelog.md)
