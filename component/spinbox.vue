<template>
	<div>
		<p>나는 스핀박스</p>
		<input type="text" v-model="amount" v-on:focusout="validate" />
		<a href="#" v-on:mousedown="plus" v-on:mouseup="clearPlus" v-on:mouseleave="clearPlus">[  +  ]</a>

		<a href="#" v-on:mousedown="minus" v-on:mouseup="clearMinus" v-on:mouseleave="clearMinus">[  -  ]</a>
	</div>
</template>

<script>
	export default {
		plusTimeout : null,
		plusInterval : null,
		minusTimeout : null,
		minusInterval : null,
		data: function(){
			return { amount: 0 }
		},
		methods : {
			plus : function(){
				this.amount = Number(this.amount) + 1;
				var self = this;
				this.plusTimeout = setTimeout(function(){
					self.plusInterval = setInterval(function(){
						self.amount = Number(self.amount) + 1;
					},100);
				}, 500);
			},
			clearPlus : function(){
				if ( this.plusTimeout ){
					clearTimeout(this.plusTimeout);
				}

				if ( this.plusInterval ){
					clearInterval(this.plusInterval);
				}
			},
			minus: function(){
				this.amount = Number(this.amount) - 1;
				var self = this;
				this.minusTimeout = setTimeout(function(){
					self.minusTimeout = setInterval(function(){
						self.amount = Number(self.amount) - 1;
					},100);
				}, 500);
			},
			clearMinus : function(){
				if ( this.minusTimeout ){
					clearTimeout(this.minusTimeout);
				}

				if ( this.minusInterval ){
					clearInterval(this.minusInterval);
				}
			},
			validate: function(){
				this.amount = Number(this.amount);
				if (isNaN(this.amount)){
					alert("올바른 숫자가 아닙니다.")
					this.amount = 0;
					return;
				}
			}
		}
	}
</script>