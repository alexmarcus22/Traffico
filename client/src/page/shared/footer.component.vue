<template>
	<section class="footer-component" id="footer">
		<svg class="svg">
			<clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
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
			<div class="row footer-container footer-links">
				<div class="col-5">
					<a class="" href="#">
						<img :src="getURL('logo')" alt="" />
					</a>
				</div>
				<div class="col-7">
					<ul class="list-inline">
						<li class="list-inline-item">About</li>
						<li class="list-inline-item">How To</li>
						<li class="list-inline-item">FAQS</li>
					</ul>
				</div>
			</div>
			<div class="row footer-container footer-copyright">
				<div class="col-6 d-flex">
          <span class="copyright align-self-center">
            Copyright @ 2019
          </span>
        </div>
				<div class="col-6">
					<ul class="list-inline social-links">
						<li>
              <img :src="getURL('facebook')" alt="">
            </li>
						<li>
              <img :src="getURL('instagram')" alt="">
            </li>
						<li>
              <img :src="getURL('twitter')" alt="">
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
	data() {
		return {
			title: "Title",
			imgPath: require("../../assets/images/logo.svg"),
      facebookPath: require("../../assets/images/facebook.svg"),
      instagramPath: require("../../assets/images/instagram.svg"),
      twitterPath: require("../../assets/images/twitter.svg"),
			isPanelOpen: false,
		};
	},
	methods: {
		getURL(string) {
			switch (string) {
        case 'facebook':
          return this.facebookPath
        case 'instagram':
          return this.instagramPath
        case 'twitter':
          return this.twitterPath
        case 'logo':
          return this.imgPath
      
        default:
          break;
      }
		},
		// getURL() {
		// 	return this.imgPath;
		// },
		// getURL() {
		// 	return this.imgPath;
		// },
		// getURL() {
		// 	return this.imgPath;
		// },
	},
};
</script>

<style>
</style>