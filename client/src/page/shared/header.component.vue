<template>
	<header class="header-component">
		<div class="container">
			<nav class="navbar navbar-expand-lg transparent d-flex">
				<div class="container-fluid">
					<a class="navbar-brand mr-auto" href="#">
						<img :src="getURL()" alt="" />
					</a>
					<div
						class="collapse navbar-collapse ml-auto"
						id="navbarSupportedContent"
					>
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">How to</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">FAQS</a>
							</li>
							<li class="nav-item">
								<button class="btn primary-button">Contact Us</button>
							</li>
						</ul>
					</div>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header Component",
	props: {
		msg: String,
	},
	data() {
		return {
			title: "Title",
			imgPath: require("../../assets/images/logo.svg"),
		};
	},
	methods: {
		getURL() {
			return this.imgPath;
		},
	},
};
</script>

<style>
</style>