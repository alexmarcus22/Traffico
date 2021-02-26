<template>
	<section class="faq-component" id="faq">
		<div class="container">
			<div class="faq-container row" :class="{ 'flex-row-reverse': reverse }">
				<div class="col-6 content" :data-aos="dataText">
					<h2 class="subtitle">FAQ</h2>
					<p class="description">
						Questions and Answers on Professional Traffic Permits:
					</p>
					<slot name="cardBody"></slot>
				</div>
				<div class="col-6 image" :data-aos="dataImg">
					<img :src="img()" alt="" srcset="" />
				</div>
			</div>
		</div>
		<div class="container">
			<div class="faq-container row">
				<div class="col-6">
					<collapse-component target="collapse1"></collapse-component>
					<collapse-component target="collapse2"></collapse-component>
					<collapse-component target="collapse3"></collapse-component>
				</div>
				<div class="col-6">
					<collapse-component target="collapse4"></collapse-component>
					<collapse-component target="collapse5"></collapse-component>
					<collapse-component target="collapse6"></collapse-component>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import AOS from "aos";
import Collapse from "./collapse.component.vue";
AOS.init();

export default {
	name: "FAQ Component",
	props: {
		reverse: Boolean,
		dataText: String,
		dataImg: String,
	},
	components: {
		"collapse-component": Collapse,
	},
	data() {
		return {
			imgSvg: require("../../assets/images/faq.svg"),
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