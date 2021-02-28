<template>
	<div class="accordion-component">
		<button
			class="btn collapse-button"
			type="button"
			data-toggle="collapse"
			:data-target="'#' + target"
			aria-expanded="false"
			:aria-controls="target"
		>
			What is a professional traffic permit?
		</button>
		<div class="collapse" :id="target">
			<div class="card card-body card-collapse">
				Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
				terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
				labore wes anderson cred nesciunt sapiente ea proident.
			</div>
		</div>
	</div>
</template>

<script>
export default {
  namer: "Collapse Component",
  props: {
    target: String
  }
};
</script>

<style>
</style>