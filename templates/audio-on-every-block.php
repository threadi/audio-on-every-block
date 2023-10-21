<?php
/**
 * File for output the audio-tag on supported blocks, if configured.
 *
 * @package audio-on-every-block
 */

?>
<figure class="audio-on-every-block-output">
	<audio src="<?php echo esc_attr( $args['file'] ); ?>" controls title="<?php echo esc_attr( $args['title'] ); ?>"></audio>
</figure>
