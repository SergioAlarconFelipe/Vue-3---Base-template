<template>
	<div>
		<p>{{ name }} {{ lastName }}</p>
		
		<p>Count is: {{ count }}</p>
		<button @click="increment">
			Increment
		</button>

		<button @click="decrement">
			Decrement
		</button>

		<button @click="msg">
			Msg
		</button>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: false,
			default: 'world',
			validator: ( value ) => {
				return value.length > 0;
			}
		},
		lastName: {
			type: String,
			required: false,
			default: 'world',
			validator: ( value ) => {
				return value.length > 0;
			}
		},
	},
	
	data() {
		return {
			count: 0
		}
	},

	mounted() {
		console.log( 'WelcomeMessage1 - mounted' );
	},

	created() {
		console.log( 'WelcomeMessage1 - created' );
	},

	methods: {
		increment() {
			this.count ++;
		},
		decrement() {
			if( this.count ) {
				this.count --;
			}
		},
		msg() {
			this.$emit( 'msg', this.name );
		},
	},
}
</script>

<style lang="scss" scoped>

</style>
