<template>
	<div class="buttonBoxStyle" @mousedown="up" @mouseup="down" :class="{ 'class-a': isA, 'class-b': isB }">
		<div class="coverBox" :class="{'cover':!isCover}">
		{{isCover}}
				<div class="raduisTip" v-show="isScale" transition="scale" v-bind:style="tipPosStyle">
				</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data:function(){
			return {
				downData:false,
				upData: true,
				isA: true,
				isB: false,
				tipWidth: 30,
				tipHeight: 30,
				isCover: false,
				isScale: false,
				tipPosStyle:{
					left: '',
					top: ''
				}
			}
		},
		methods:{
			
			down:function(e){
				console.log(e)
				this.isCover = true;
				this.tipPosStyle.left = e.offsetX-this.tipWidth/2+'px';
				this.tipPosStyle.top = e.offsetY-this.tipHeight/2+'px';
				
				this.isScale = false;
			},
			up:function(){
				this.isCover = false;
				this.isScale = true;
			}
		}
	}
</script>

<style type="text/css" scoped>
	.buttonBoxStyle{
		height: 70px;
		line-height: 70px;
		border: 1px solid red;
		background: #eee;
		position: relative;
		transition: all ease .5s;
		overflow: hidden;
	}
	.buttonBoxStyle .cover{
		transition: all ease .6s;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: #aaa;
	}
	.raduisTip{
		width: 30px;
		height: 30px;
		position: absolute;
		background: #aaa;
		border-radius: 50%;
	}
	.scale-transition {
	}
	.scale-enter{
		transform: scale(1);
		opacity: 1;
	}
	.scale-leave{
	  transition: all .5s ease;
		transform: scale(10);
		opacity: 0
	}
</style>