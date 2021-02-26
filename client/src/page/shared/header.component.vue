<template>
	<nav
		class="navigation-component navbar navbar-expand-lg transparent d-flex col-12"
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
					<a class="nav-link active" aria-current="page" href="#about-us">About</a>
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
		<Hamburger></Hamburger>
	</nav>
</template>

<script>
import Hamburger from "../components/hamburger.component.vue";

export default {
	name: "Header Component",
	props: {
		msg: String,
	},
	components: {
		Hamburger
	},
	data() {
		return {
			title: "Title",
			imgPath: require("../../assets/images/logo.svg"),
			isPanelOpen: false
		};
	},
	methods: {
		getURL() {
			return this.imgPath;
		}
	},
};
</script>

<style>
</style>