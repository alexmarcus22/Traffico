<template>
	<div class="accordion-component">
		<button
			class="btn collapse-button accordion-button"
			type="button"
			data-toggle="collapse"
			:data-target="'#' + target"
			aria-expanded="false"
			:aria-controls="target"
		>
			{{ accordionTitle }}
		</button>
		<div class="collapse" :id="target">
			<div class="card card-body card-collapse">
				{{ accordionDescription }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	namer: "Collapse Component",
	props: {
		target: String,
		accordionTitle: String,
		accordionDescription: String
	},
};
</script>

<style>
</style>