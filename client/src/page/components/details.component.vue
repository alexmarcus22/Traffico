<template>
	<section class="about-component" id="about-us">
		<div class="container">
			<div class="about-container row" :class="{ 'flex-row-reverse': reverse }">
				<div class="col-6 content" :data-aos="dataText">
					<h2 class="subtitle">
						<slot name="subtitle"> </slot>
					</h2>
					<p class="description">
						<slot name="description"></slot>
					</p>
					<slot name="cardBody"></slot>
				</div>
				<div></div>
				<div class="col-6 image" :data-aos="dataImg">
					<slot name="image"> </slot>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import AOS from "aos";
AOS.init();

export default {
	name: "AboutUs Component",
	props: {
		reverse: Boolean,
		dataText: String,
		dataImg: String,
	},
	data() {
		return {
			buttonUnion: require("../../assets/images/union.svg"),
			mobileView: false,
			showNav: false,
		};
	},
	methods: {
		union() {
			return this.buttonUnion;
		},
		img() {
			return this.imgSvg;
		},
	},
	mounted() {},
};
</script>