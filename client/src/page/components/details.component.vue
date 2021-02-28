<template>
	<section :id="idName" :class="nameComp + '-component'">
		<div class="container">
			<div class="about-container row" :class="{ 'flex-row-reverse': reverse }">
				<div class="col-12 col-xl-6 content" :data-aos="dataText">
					<h2 class="subtitle">
						<slot name="subtitle"> </slot>
					</h2>
					<p class="description">
						<slot name="description"></slot>
					</p>
					<slot name="cardBody"></slot>
				</div>
				<div class="col-12 col-xl-6 image" :data-aos="dataImg">
					<slot name="image"> </slot>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

export default {
	name: "Details Component",
	props: {
		reverse: Boolean,
		dataText: String,
		dataImg: String,
		idName: String
	},
	data: () => ({
		buttonUnion: require("../../assets/images/union.svg"),
		mobileView: false,
		showNav: false,
		nameComp: "about",
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