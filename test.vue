<template>
	<div>
		<h1>helloworld</h1>
		<p>{{ hello }}</p>
	</div>
</template>

<script>
	export default {
		name : "app",
		data: function(){
			return { hello: 'vue bambi vue : hello' }
		}
	}
</script>
