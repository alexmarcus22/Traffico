<template>
	<SideBarComponent>
		<ul class="nav flex-column">
			<li class="nav-item">
				<a class="nav-link active" @click="hideAndScrollTo('about-us')"
					>About</a
				>
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
	<DetailsComponent :reverse="false" dataImg="fade-left">
		<template v-slot:subtitle> About Us </template>
		<template v-slot:description>
			The occupational traffic permit is one of the most important things in the
			company when carrying out freight transport. In fact, it is a prerequisite
			for doing business traffic at all.
		</template>
		<template v-slot:cardBody>
			<div class="card card-component">
				<div class="card-body">
					How do you do when you need to obtain a commercial traffic permit for
					freight transport to your business?
				</div>
			</div>
		</template>
		<template v-slot:image>
			<img
				:src="require('./assets/images/illustration1.svg')"
				alt=""
				srcset=""
			/>
		</template>
	</DetailsComponent>
	<DetailsComponent :reverse="true" dataText="fade-right">
		<template v-slot:subtitle> How To Apply </template>
		<template v-slot:description>
			When applying for a traffic permit, there are certain requirements that
			you must meet that are included in the examination: requirements for
			professional knowledge, solid establishment, good reputation and financial
			resources. Important to remember is to confirm your application for a
			traffic permit by the company's company signer or CEO.
		</template>
		<template v-slot:image>
			<img
				:src="require('./assets/images/illustration2.svg')"
				alt=""
				srcset=""
			/>
		</template>
	</DetailsComponent>
</template>

<style lang='scss'>
@import "./assets/sass/main.scss";
</style>

<script>
import HeroComponent from "./page/components/hero.component.vue";
import DetailsComponent from "./page/components/details.component.vue";
import SideBarComponent from "./page/components/sidebar.component.vue";
import eventBus from "./store";
export default {
	name: "App",
	components: {
		HeroComponent,
		SideBarComponent,
		DetailsComponent,
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
			setTimeout(() => {
				el.scrollIntoView({ behavior: "smooth", block: "center" });
			}, 100);
		},
	},
};
</script>
