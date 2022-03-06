/**
 * Add i18n
 */
const { __ } = wp.i18n;

/**
 * List of supported blocks
 *
 * @type {string[]}
 */
const supportedBlocks = [
    'core/heading',
    'core/paragraph',
    'core/gallery',
    'core/list',
    'core/quote',
    'core/pullquote',
    'core/table'
];

/**
 * Add the attribute for the mediaId
 *
 * @param settings
 * @param name
 * @returns {*}
 */
function addAudioPlaybackAttribute(settings, name) {
    if (typeof settings.attributes !== 'undefined') {
        // Do nothing if it's another block than our supported ones.
        if ( !supportedBlocks.includes( name ) ) {
            return settings;
        }
        settings.attributes = Object.assign(settings.attributes, {
            audioPlaybackId: {
                type: 'integer',
                default: 0
            },
            audioPlaybackTitle: {
                type: 'string'
            },
        });
    }
    return settings;
}
wp.hooks.addFilter(
    'blocks.registerBlockType',
    'awp/cover-custom-attribute',
    addAudioPlaybackAttribute
);

const coverAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        /**
         * Add components
         */
        const { Fragment } = wp.element;
        const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
        const { Button, PanelBody, TextControl } = wp.components;

        /**
         * Event on select audio-file
         *
         * @param media
         */
        const onSelectMedia = (media) => {
            props.setAttributes({
                audioPlaybackId: media.id
            });
        }

        /**
         * Event to remove selected audio-file
         */
        const removeMedia = () => {
            props.setAttributes({
                audioPlaybackId: 0
            });
        }

        /**
         * Get settings
         */
        const { attributes, setAttributes, isSelected } = props;
        return (
            <Fragment>
                <BlockEdit {...props} />
                {isSelected && (supportedBlocks.includes( props.name )) &&
                    <InspectorControls>
                        <PanelBody
                            title={ __( 'Audio Playback', 'audio-on-every-block' ) }
                        >
                            <div className="editor-choose-block-audio">
                                <MediaUploadCheck>
                                    <MediaUpload
                                        allowedTypes={ ['audio'] }
                                        onSelect={onSelectMedia}
                                        value={attributes.mediaId}
                                        render={({open}) => (
                                            <Button
                                                className={attributes.audioPlaybackId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                                                onClick={open}
                                            >
                                                {attributes.audioPlaybackId === 0 && __('Choose an audio-file', 'audio-on-every-block')}
                                            </Button>
                                        )}
                                    />
                                </MediaUploadCheck>
                                {attributes.audioPlaybackId !== 0 &&
                                    <MediaUploadCheck>
                                        <Button onClick={removeMedia} isLink isDestructive>{__('Remove audio-file', 'audio-on-every-block')}</Button>
                                    </MediaUploadCheck>
                                }
                                <TextControl
                                    label={__('Title', 'audio-on-every-block')}
                                    value={ attributes.audioPlaybackTitle }
                                    onChange={ ( value ) => setAttributes( { audioPlaybackTitle: value } ) }
                                />
                            </div>
                        </PanelBody>
                    </InspectorControls>
                }
            </Fragment>
        );
    };
}, 'coverAdvancedControls');

wp.hooks.addFilter(
    'editor.BlockEdit',
    'awp/cover-advanced-control',
    coverAdvancedControls
);
