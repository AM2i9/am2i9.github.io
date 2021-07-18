<script>
	import ImageLink from './ImageLink'
</script>

<style>

	.media-links {

		width: 100%;

		animation-duration: 4s;
		animation-name: load-fade-in;
		
		margin-top: 40px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

</style>

<div class="media-links">
	<!-- Github -->
	<ImageLink
		alt="Github"
		src='/assets/github-logo.png'
		href='https://github.com/am2i9'
	/>
	<!-- YouTube -->
	<ImageLink
		alt="YouTube"
		src='/assets/youtube-logo.png'
		href='https://www.youtube.com/channel/UCfLCmE1BPuZm_xX3hxRMNdQ'
	/>
</div>