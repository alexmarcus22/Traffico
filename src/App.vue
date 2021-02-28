<template>
	<div class="main-page">
		<sidebar-component>
			<ul class="nav flex-column">
				<li class="nav-item">
					<a class="nav-link active" @click="hideAndScrollTo('about')">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" @click="hideAndScrollTo('howTo')"
						>How to</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" @click="hideAndScrollTo('faq')">FAQS</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" @click="hideAndScrollTo('contact')"
						>Contact Us</a
					>
				</li>
			</ul>
		</sidebar-component>
		<hero-component />
		<details-component :reverse="false" dataImg="fade-left" id="about">
			<template v-slot:subtitle> About Us </template>
			<template v-slot:description>
				The occupational traffic permit is one of the most important things in
				the company when carrying out freight transport. In fact, it is a
				prerequisite for doing business traffic at all.
			</template>
			<template v-slot:cardBody>
				<div class="card card-component">
					<div class="card-body">
						How do you do when you need to obtain a commercial traffic permit
						for freight transport to your business?
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
		</details-component>
		<details-component :reverse="true" dataText="fade-right" id="howTo">
			<template v-slot:subtitle> How To Apply </template>
			<template v-slot:description>
				When applying for a traffic permit, there are certain requirements that
				you must meet that are included in the examination: requirements for
				professional knowledge, solid establishment, good reputation and
				financial resources. Important to remember is to confirm your
				application for a traffic permit by the company's company signer or CEO.
			</template>
			<template v-slot:image>
				<img
					:src="require('./assets/images/illustration2.svg')"
					alt=""
					srcset=""
				/>
			</template>
		</details-component>
		<faq-component></faq-component>
		<footer-component dataMobileText="fade-right">
			<template v-slot:secondMobile>
				<img
					:src="require('./assets/images/secondmobil.svg')"
					alt=""
					srcset=""
				/>
			</template>
			<template v-slot:footerSVG1>
				<img :src="require('./assets/images/footer2.svg')" alt="" srcset="" />
			</template>
			<template v-slot:footerSVG2>
				<img :src="require('./assets/images/footer3.svg')" alt="" srcset="" />
			</template>
			<template v-slot:lineSVG>
				<img
					:src="require('./assets/images/line-footer.svg')"
					alt=""
					srcset=""
				/>
			</template>
			<contact-component dataContactText="fade-left">
				<template v-slot:cardBody>
					<div class="card card-component">
						<div class="card-body">
							We provide traffic management consultants so you get started
							quickly, contact us for a quote today!
						</div>
					</div>
				</template>
			</contact-component>
		</footer-component>
	</div>
	{{ entries.title }}
</template>

<style lang='scss'>
@import "./assets/sass/main.scss";
</style>

<script>
import Sidebar from "./page/components/sidebar.component.vue";
import Hero from "./page/components/hero.component.vue";
import Details from "./page/components/details.component.vue";
import FAQ from "./page/components/faq.component.vue";
import Footer from "./page/shared/footer.component.vue";
import Contact from "./page/components/contact.component.vue";
import eventBus from "./store";
import SPA from "./assets/js/SPA.json";
import AOS from "aos";
AOS.init();

export default {
	name: "App",
	components: {
		"hero-component": Hero,
		"sidebar-component": Sidebar,
		"details-component": Details,
		"faq-component": FAQ,
		"footer-component": Footer,
		"contact-component": Contact,
	},
	data: () => ({
		entries: {},
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
			}, 200);
		},
	},
	mounted() {
		let self = this;
		for (const value of Object.entries(SPA)) {
			self.entries = value[0];
		}
	},
};
</script>
