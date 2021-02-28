<template>
<navigation-component></navigation-component>
</template>

<script>
import Navigation from "../components/nav.component.vue";

export default {
	name: "Header Component",
	props: {
		msg: String,
	},
	components: {
		'navigation-component' :Navigation
	},
	data: () => ({
		title: "Title",
		imgPath: require("../../assets/images/logo.svg"),
		isPanelOpen: false,
	}),
	methods: {
		getURL() {
			return this.imgPath;
		},
	},
};
</script>

<style>
</style>