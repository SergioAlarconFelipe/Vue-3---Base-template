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

<script setup>
import { ref, defineEmits, defineProps, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount, onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated, onServerPrefetch, } from 'vue';

const count = ref( 0 );
const props = defineProps( {
	name: { 
		type: String,
		required: false,
		default: '',
	},
	lastName: { 
		type: String,
		required: false,
		default: '',
	},
} );
const emit = defineEmits( [ 'msg', ] );

// functions that mutate state and trigger updates
function increment() {
	count.value ++;
}

function decrement() {
	if( count.value ) {
		count.value --;
	}
}

function msg() {
	emit( 'msg', props.name );
}

// lifecycle hooks
console.log( 'WelcomeMessage2 - created', ref );

onMounted( () => {
	console.log( 'WelcomeMessage2 - mounted' );
} );

onUpdated( () => {
	// console.log( 'WelcomeMessage2 - onUpdated' );
} );

onUnmounted( () => {
	// console.log( 'WelcomeMessage2 - onUnmounted' );
} );

onBeforeMount( () => {
	// console.log( 'WelcomeMessage2 - onBeforeMount' );
} );

onBeforeUpdate( () => {
	// console.log( 'WelcomeMessage2 - onBeforeUpdate' );
} );

onBeforeUnmount( () => {
	// console.log( 'WelcomeMessage2 - onBeforeUnmount' );
} );

onErrorCaptured( () => {
	// console.log( 'WelcomeMessage2 - onErrorCaptured' );
} );

onRenderTracked( () => {
	// console.log( 'WelcomeMessage2 - onRenderTracked' );
} );

onRenderTriggered( () => {
	// console.log( 'WelcomeMessage2 - onRenderTriggered' );
} );

onActivated( () => {
	// console.log( 'WelcomeMessage2 - onActivated' );
} );

onDeactivated( () => {
	// console.log( 'WelcomeMessage2 - onDeactivated' );
} );

onServerPrefetch( () => {
	// console.log( 'WelcomeMessage2 - onServerPrefetch' );
} );
</script>

<style lang="scss" scoped>

</style>
