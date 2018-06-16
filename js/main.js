import Vue from "../node_modules/vue/dist/vue.min.js";
import test from "../test.vue";
import spinbox from "../component/spinbox.vue";

new Vue({
	el:"#test-app",
	components: {
		'test' : test,
		'spinbox' : spinbox
	}
});
