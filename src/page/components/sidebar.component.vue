<template>
	<transition name="fade" v-if="isActive">
		<section class="sidebar-component">
			<transition name="slide">
				<div v-if="isPanelOpen" class="sidebar-panel">
					<slot></slot>
				</div>
			</transition>
		</section>
	</transition>
</template>
<script>
import eventBus from "../../store";
export default {
	name: "Sidebar",
	data: () => ({
		isPanelOpen: false,
	}),
	mounted() {
		eventBus.on("toggleSideBar", (args) => {
			this.isPanelOpen = args;
		});
	},
	computed: {
		isActive() {
			return this.isPanelOpen;
		},
	},
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}
</style>
