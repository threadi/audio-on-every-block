# Audio on every block

This repository is the base for the plugin _Audio on every block_. This provides an addition for many Gutenberg-Blocks to add an audio file per Block.

## Usage

After checkout go through the following steps:

1. copy _build/build.properties.dist_ to _build/build.properties_.
2. modify the build/build.properties file - note the comments in the file.
3. execute the command in _build/_: `ant init`
4. after that the plugin can be activated in WordPress

## Release

1. increase the version number in _build/build.properties_.
2. execute the following command in _build/_: `ant build`
3. after that you will finde in the release directory a zip file which could be used in WordPress to install it.

## Translations

I recommend to use [PoEdit](https://poedit.net/) to translate texts for this plugin.

### generate pot-file

Run in main directory:

`wp i18n make-pot . languages/audio-on-every-block.pot --exclude=src`

### update translation-file

1. Open .po-file of the language in PoEdit.
2. Go to "Translate > "Update from POT-file".
3. After this the new entries are added to the language-file.

### export translation-file

1. Open .po-file of the language in PoEdit.
2. Go to File > Save.
3. Upload the generated .mo-file and the .po-file to the plugin-folder languages/

### generate json-translation-files

Run in main directory:

`wp i18n make-json languages`

OR use ant in build/-directory: `ant json-translations`

## Build blocks

### Requirements

`npm install`

### Run for development

`npm start`

### Run for release

`npm run build`

Hint: will be called by ant-command mentioned above.

## Check for WordPress Coding Standards

### Initialize

`composer install`

### Run

`vendor/bin/phpcs --standard=WordPress file`

### Repair

`vendor/bin/phpcbf --standard=WordPress file`