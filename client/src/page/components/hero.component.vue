<template>
	<section class="hero-component container">
		<div class="row">
			<header-component v-if="!mobileView"></header-component>
			<div class="hero-container col-7">
				<h1 class="title">Your awesome traffic permit consultant.</h1>
				<button class="btn primary-button">
					Get Started
					<img :src="union()" alt="" />
				</button>
			</div>
		</div>
		<div class="mobile" data-aos="fade-right" data-aos-offset="0">
			<img :src="carImg()" alt="" srcset="" />
		</div>
	</section>
</template>

<script>
import headerComponent from "../shared/header.component";

export default {
	name: "Hero Component",
	props: {
		msg: String,
	},
	data() {
		return {
			buttonUnion: require("../../assets/images/union.svg"),
			car: require("../../assets/images/car.svg"),
			mobileView: false,
			showNav: false
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
	mounted() {},
};
</script>