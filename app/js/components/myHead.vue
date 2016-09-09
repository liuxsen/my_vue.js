<template
transition="fade"
transition-mode="out-in">
<div class="container text-center">
<div class="row">
 <div class="col-md-4 padding-10 show-border">{{itemsHead[0].name}}</div>
 <div class="col-md-4 padding-10 show-border">{{itemsHead[1].name}}</div>
 <div class="col-md-4 padding-10 show-border">{{itemsHead[2].name}}</div>
</div>
<div class="row" v-for="itemContent in itemsContent">
  <div class="col-md-4 padding-10 show-border">{{itemContent.name}}</div>
 <div class="col-md-4 padding-10 show-border">{{itemContent.jiage}}</div>
 <div class="col-md-4 padding-10 show-border">
   <button class="btn btn-primary btn-xs">-</button>
    1
   <button class="btn btn-primary btn-xs">+</button>
 </div>
</div>
</div>
</template>

<script>
module.exports =  {
 data:function(){
 	return {
 		msg: 'head',
    all:'',
    itemsHead:[
        {name:'商品名称'},
        {name:'商品价格'},
        {name:'商品数量'},
      ],
    itemsContent:[
        {
          name: '商品1',
          jiage: 200,
          num: 1,
      },
      {
          name: '商品2',
          jiage: 200,
          num: 1,
      }
    ]
 	}
 }

}
</script>

<style>
.fade-transition{
  transition: opacity .3s ease;
}
.fade-enter,.fade-leave{
  opacity: 0;
}
.padding-10{
  padding: 10px;
}
.show-border{
  border: 1px solid #eee;
}
</style>