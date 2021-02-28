<template>
	<section class="contact-component" id="contact">
		<div class="container">
			<div class="row contact-container">
				<div class="col-12 col-xl-5">
					<slot name="cardBody"> </slot>
				</div>
				<div class="col-12 col-xl-7">
					<div class="card-contact" :data-aos="dataContactText">
						<div class="card-body">
							<form
								@submit.prevent="TestMessage"
								class="contact-form"
								method="GET"
							>
								<div class="form-group">
									<label for="name1">Name</label>
									<input
										type="text"
										class="form-control"
										id="name1"
										placeholder="Enter email"
										value="Hendrik Larsson"
									/>
								</div>
								<div class="form-group">
									<label for="emailAdress">Email Adress</label>
									<input
										type="email"
										class="form-control"
										id="emailAdress"
										placeholder="Your email address"
									/>
								</div>
								<button type="submit " class="btn primary-button">
									Get Started
									<img :src="union()" alt="" />
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import AOS from "aos";
AOS.init({
	disable: function () {
		return window.innerWidth < 800;
	},
});

export default {
	name: "ContactUs Component",
	props: {
		dataContactText: String,
	},
	data: () => ({
		unionImg: require("../../assets/images/union.svg"),
	}),
	methods: {
		TestMessage() {
			alert("Work In Progress");
		},
		union() {
			return this.unionImg;
		},
	},
	mounted() {
		console.log(this.dataContactText);
	},
};
</script>

<style>
</style>