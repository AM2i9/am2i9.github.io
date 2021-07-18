<script>
	import * as animateScroll from "svelte-scrollto";
</script> 

<style>
	.scroll-arrow {

		display: flex;
		align-self: stretch;
		justify-content: center;
		align-items: stretch;
		margin: 20px;

		animation-duration: 5s;
		animation-name: load-fade-in;
	}

	.arrow {
		cursor:pointer;
		transition: background-color 0.1s;

		width: 40px;
		height: 40px;
		margin: -20px 0 0 -20px;
		transform: rotate(45deg);
		border-left: none;
		border-top: none;
		border-right: 5px #fff solid;
		border-bottom: 5px #fff solid;
	}

	.arrow:hover {
		background-color: rgba(255, 255, 255, 0.1)
	}

</style>

<div class="scroll-arrow">
	<div
		class="arrow"
		on:click={() => animateScroll.scrollToBottom()}>
	</div>
</div>
