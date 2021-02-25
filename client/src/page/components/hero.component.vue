<template>
	<section class="hero-component">
		<header-component></header-component>
		<div class="container page-content">
			<h1 class="title">Your awesome traffic permit consultant.</h1>
			<button class="btn primary-button">
				Get Started
				<img :src="union()" alt="" />
			</button>
		</div>
		<div
			class="mobile"
			data-aos="fade-right"
		>
			<img :src="carImg()" alt="" srcset="" />
		</div>
	</section>
</template>

<script>
import headerComponent from "../shared/header.component";
import AOS from "aos";

AOS.init({
	disable: false,
	startEvent: "load",
	initClassName: "aos-init",
	animatedClassName: "aos-animate",
	useClassNames: false,
	disableMutationObserver: false,
	debounceDelay: 50,
	throttleDelay: 99,

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120,
	delay: 0,
	duration: 400,
	easing: "ease-in-out-quad",
	once: false,
	mirror: false,
	anchorPlacement: "top-bottom",
});

export default {
	name: "Hero Component",
	props: {
		msg: String,
	},
	data() {
		return {
			buttonUnion: require("../../assets/images/union.svg"),
			car: require("../../assets/images/car.svg"),
		};
	},
	components: {
		headerComponent,
	},
	methods: {
		union() {
			return this.buttonUnion;
		},
		carImg() {
			return this.car;
		},
	},
};
</script>