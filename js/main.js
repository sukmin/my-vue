import Vue from "../node_modules/vue/dist/vue.min.js";
import test from "../test.vue";

new Vue({
	el:"#test-app",
	components: {
		'test' : test
	}
});
