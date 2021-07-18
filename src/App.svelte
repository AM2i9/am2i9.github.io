<script>
	import Home from './views/Home'
	import About from './views/About'

	import * as animateScroll from "svelte-scrollto";
 
	animateScroll.setGlobalOptions({
		duration: 1500,
	})
</script>

<style>
	#footer {
		display: flex;
		align-items: center;
		text-align: center;
	}

	#footer a {
		font-size: 1.2rem;
		width: 100%;
		padding-bottom: 20px;

		cursor: pointer;
	}

	#footer a:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
	
</style>

<main>
	<Home />
	<About />
	
	<div id="footer">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a on:click={() => animateScroll.scrollToTop()}>Scroll to top </a>
	</div>
</main>