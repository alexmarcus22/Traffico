<template>
	<nav
		class="navigation-component navbar navbar-expand-xl transparent d-flex col-12"
	>
		<a class="navbar-brand mr-auto" href="#">
			<img :src="getURL()" alt="" />
		</a>
		<div class="collapse navbar-collapse" id="navbar">
			<div
				class="sidebar-backdrop"
				@click="closeSidebarPanel"
				v-if="isPanelOpen"
			></div>
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#about"
						>About</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#howTo">How to</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#faq">FAQS</a>
				</li>
				<li class="nav-item">
					<a class="btn primary-button" href="#contact">Contact Us</a>
				</li>
			</ul>
		</div>
		<hamburger-component></hamburger-component>
	</nav>
</template>

<script>
import Hamburger from "../components/hamburger.component.vue";
export default {
	name: "Navigation Component",
	components: {
		"hamburger-component": Hamburger,
	},
	data: () => ({
		imgPath: require("../../assets/images/logo.svg"),
		isPanelOpen: false,
	}),
	methods: {
		getURL() {
			return this.imgPath;
		},
	},
};
</script>

<style>
</style>