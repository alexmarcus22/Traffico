<template>
	<section class="footer-component" id="footer">
		<svg class="svg">
			<clipPath id="clipPathFooter" clipPathUnits="objectBoundingBox">
				<path
					d="M0.925,0.001 H-0.004 V1 H0.996 V0.152 C0.996,0.069,0.964,0.001,0.925,0.001"
				></path>
			</clipPath>
		</svg>
		<div class="footer-clipped"></div>
		<div id="secondMobile" :data-aos="dataMobileText">
			<slot name="secondMobile"> </slot>
		</div>
		<div id="footerSVG">
			<slot name="footerSVG1"> </slot>
		</div>
		<div id="footerSVG2">
			<slot name="footerSVG2"> </slot>
		</div>
		<div class="line-svg">
			<slot name="lineSVG"> </slot>
		</div>
		<slot></slot>
		<div class="container">
			<div
				class="row footer-container footer-links flex-column-reverse flex-md-row"
			>
				<div class="col-12 col-xl-5">
					<a class="" href="#">
						<img :src="getURL('logo')" alt="logo" />
					</a>
				</div>
				<div class="col-12 col-xl-7">
					<ul class="list-inline flex-xl-row flex-column">
						<li class="list-inline-item">
							<a href="#about">About</a>
						</li>
						<li class="list-inline-item">
							<a href="#howTo">How To</a>
						</li>
						<li class="list-inline-item">
							<a href="#faq">FAQS </a>
						</li>
					</ul>
				</div>
			</div>
			<div class="row footer-container footer-copyright">
				<div class="col-6 d-flex">
					<span class="copyright align-self-center"> Copyright @ 2021 </span>
				</div>
				<div class="col-6">
					<ul class="list-inline social-links">
						<li>
							<a @click="alert('Work in progress')"><img :src="getURL('facebook')" alt="facebook" /></a>
						</li>
						<li>
							<a @click="alert('Work in progress')"><img :src="getURL('instagram')" alt="instagram" /></a>
						</li>
						<li>
							<a @click="alert('Work in progress')"><img :src="getURL('twitter')" alt="twitter" /></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Footer Component",
	props: {
		dataMobileText: String,
	},
	data: () => ({
		title: "Title",
		imgPath: require("../../assets/images/logo.svg"),
		facebookPath: require("../../assets/images/facebook.svg"),
		instagramPath: require("../../assets/images/instagram.svg"),
		twitterPath: require("../../assets/images/twitter.svg"),
		isPanelOpen: false,
	}),
	methods: {
		getURL(string) {
			switch (string) {
				case "facebook":
					return this.facebookPath;
				case "instagram":
					return this.instagramPath;
				case "twitter":
					return this.twitterPath;
				case "logo":
					return this.imgPath;

				default:
					break;
			}
		},
		alert(msg) {
			alert(msg);
		}
	},
};
</script>

<style>
</style>