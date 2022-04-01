<template>
	<div class="full-width center-content">
		<img src="static/img/logo.png">

		<div>
			<WelcomeMessage1
				name="World 1"
				last-name="World 2"
				@msg="msg"
			/>

			<hr />

			<WelcomeMessage2 
				name="World 1"
				last-name="World 2"
				@msg="msg"
			/>
		</div>
	</div>
</template>

<script>
import WelcomeMessage1 from 'components/WelcomeMessage/WelcomeMessage1'
import WelcomeMessage2 from 'components/WelcomeMessage/WelcomeMessage2'

export default {
	name: 'Home',
	components: {
		WelcomeMessage1,
		WelcomeMessage2,
	},

	methods: {
		msg( msg ) {
			alert( msg );
		}
	},
}
</script>

<style lang="scss" scoped>
.full-width {
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	max-width: 1200px;

	img {
		border-right: 1px solid #9a9a9a;
		padding-right: 1rem;
		margin-right: 1rem;
	}
}
</style>
