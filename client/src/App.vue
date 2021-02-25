<template>
	<SideBarComponent>
		<ul class="nav flex-column">
			<li class="nav-item">
				<a class="nav-link active" @click="hideAndScrollTo('about-us')">About</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">How to</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">FAQS</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Contact Us</a>
			</li>
		</ul>
	</SideBarComponent>
	<HeroComponent />
	<div id="about-us">
		asdsa
	</div>
</template>

<style lang='scss'>
@import "./assets/sass/main.scss";
</style>

<script>
import HeroComponent from "./page/components/hero.component.vue";
import SideBarComponent from "./page/components/sidebar.component.vue";
import eventBus from "./store";
export default {
	name: "App",
	components: {
		HeroComponent,
		SideBarComponent,
	},
	data: () => ({
		isPanelOpen: false,
	}),
	methods: {
		hideAndScrollTo(ref) {
			this.isPanelOpen = false;
			document.body.classList.toggle("noscrollbar");
			eventBus.emit("toggleSideBar", this.isPanelOpen);
			eventBus.emit("toggleHamburger", this.isPanelOpen);
			var el = document.getElementById(ref);
			el.scrollIntoView();
		},
	},
};
</script>
