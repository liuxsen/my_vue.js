<template>
	<div class="col-md-6 col-md-offset-2">
		<button class="btn btn-success" @click="getMsg">获取数据</button>
		<div>
			{{msg}}
		</div>
	</div>
</template>

<script>
export default {

  name: 'getData',

  data () {
    return {
    	msg: '数据展示'
    };
  },
  methods:{
  	getMsg(){
  		this.$http.post('/aa',{
  			book:'book',
  			id:1
  		},{
  			'headers':{
  				'Content-Type':'x-www-form-urlencoded'
  			}
  		}).then(function(res){
  			console.log(res.data);
        this.$set('msg',res.data.msg)
  		},function(err){
  			console.log(err)
  		})
  	}
  }
};
</script>

<style lang="css" scoped>
</style>