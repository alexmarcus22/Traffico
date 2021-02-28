<template>
	<section class="faq-component" id="faq">
		<div class="container">
			<div class="faq-container row" :class="{ 'flex-row-reverse': reverse }">
				<div class="col-12 col-xl-4 content" :data-aos="dataText">
					<h2 class="subtitle">FAQ</h2>
					<p class="description">
						Questions and Answers on Professional Traffic Permits:
					</p>
					<slot name="cardBody"></slot>
				</div>
				<div class="col-12 col-xl-8 image" :data-aos="dataImg">
					<img :src="img()" alt="" srcset="" />
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row faq-container accordions">
				<div
					v-for="(accordion, key) in accordionComponents"
					:key="key"
					class="col-12 col-md-6"
				>
					<accordion-component
						:target="'collapse' + key"
						:accordionTitle="accordion.title"
						:accordionDescription="accordion.description"
					></accordion-component>
				</div>
			</div>
			<div class="row faq-container">
				<div class="col-md-6 offset-md-6">
					<div class="load-more">
						<button class="btn secondary-button accordion-button">
							Load More
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Accordion from "./accordion.component.vue";

export default {
	name: "FAQ Component",
	props: {
		reverse: Boolean,
		dataText: String,
		dataImg: String,
		accordionComponents: Object,
	},
	components: {
		"accordion-component": Accordion,
	},
	data: () => ({
		imgSvg: require("../../assets/images/faq.svg"),
	}),
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