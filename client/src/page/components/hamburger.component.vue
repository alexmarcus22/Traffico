<template>
	<div id="burger" @click.prevent="toggle">
		<slot>
			<button
				type="button"
				class="burger-button"
				title="Menu"
				:class="{ active: isBurgerActive }"
			>
				<span class="burger-bar burger-bar--1"></span>
				<span class="burger-bar burger-bar--2"></span>
				<span class="burger-bar burger-bar--3"></span>
			</button>
		</slot>
	</div>
</template>
<script>
import eventBus from "../../store";
export default {
	name: "Hamburger",
	data: () => ({
		isBurgerActive: false,
	}),
	methods: {
		toggle() {
			this.isBurgerActive = !this.isBurgerActive;
			document.body.classList.toggle("noscrollbar");
			eventBus.emit("toggleSideBar", this.isBurgerActive);
		},
	},
	mounted() {
		eventBus.on("toggleHamburger", ()=> {
			this.isBurgerActive = !this.isBurgerActive;
		});
	},
};
</script>