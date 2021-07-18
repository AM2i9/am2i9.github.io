<script>
	export let href = "";
	export let up = false;
</script> 

<style>
	.scroll-arrow {

		display: flex;
		align-self: stretch;
		justify-content: center;
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
		border-left: none;
		border-top: none;
		border-right: 5px #fff solid;
		border-bottom: 5px #fff solid;
	}

	.arrow:hover {
		background-color: rgba(255, 255, 255, 0.1)
	}

	.down {
		transform: rotate(45deg);
	}

	.up {
		transform: rotate(225deg);
		align-self: start;
	}

	@media only screen and (max-width:600px) {

		.arrow {
			width: 30px;
			height: 30px;
		}

	}

</style>

<div class="scroll-arrow">

	{#if up }
		<a {href} class="arrow up"><div></div></a>
	{:else}
		<a {href} class="arrow down"><div></div></a>
	{/if}
</div>
