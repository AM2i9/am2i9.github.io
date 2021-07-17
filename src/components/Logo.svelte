<style>

	.logo {
		text-align: center;
		margin-bottom: 0px;
		margin-top: 0px;
	}

	.logo #username {
		animation-duration: 1s;
		animation-name: fade-slide-top;
		font-size: 5rem;
	}

	.logo #full-name {
		animation-duration: 1s;
		animation-name: fade-slide-bottom;
		font-size: 2rem;
	}

	.logo #seperator {
		animation-duration: 2s;
		animation-name: x-fade-scale-in;

		width: 350px;
		height: 3px;
		background-color: #fff;
	}

	.logo img {

		animation-duration: 3s;
		animation-name: load-fade-in;

		margin-top: 20px;
		width: 400px;
		border-radius: 50%;
	}

	@keyframes x-fade-scale-in {
		0%, 20% {
			transform: scaleX(0);
			opacity: 0%;
		}
		to {
			transform: scaleX(1);
			opacity: 100%;
		}
	}

	@keyframes fade-slide-top {
		0%, 20% {
			transform: translateY(-50px);
			opacity: 0%;
		}
		to {
			transform: translateY(0px);
			opacity: 100%;
		}
	}

	@keyframes fade-slide-bottom {
		0%, 20% {
			transform: translateY(50px);
			opacity: 0%;
		}
		to {
			transform: translateY(0px);
			opacity: 100%;
		}
	}

</style>

<div class="logo">
	<h1 id="username" class="logo">AM2i9</h1>
	<hr id="seperator" class="logo"/>
	<h2 id="full-name" class="logo">Patrick Brennan</h2>
	<img src="https://github.com/AM2i9.png" alt="Current Github Profile Picture">
</div>