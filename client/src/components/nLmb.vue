<template>
    <div>
       <b>inline-template</b>
      <my-item v-for="item in items" :item='item' inline-template>
        <p>{{a}}{{item.text}}</p>
      </my-item>
      <b>no inline-template</b>
      <my-item  v-for="item in items" :item='item'>
        {{a}}{{item.text}}
      </my-item>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
                items:[{
                  text:'one',
                },{
                  text: 'two'
                }]
            }
        },
        components:{
            'my-item':{
              props:['item'],
              data:function(){
                return {
                  a:'i am in child'
                }
              },
              template:'<p>item模板 {{a}}{{item.text}}</p>slot:<slot></slot>'
            }
        }
    }
</script>
