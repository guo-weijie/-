<template>
  <div class="about">
    <a v-for="(item,index) in list" :key="index" :href="item.url" target="_blank">{{item.page}}</a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[],
      src:void 0,
      dp:void 0
    }
  },
  created(){
    this.list=JSON.parse(localStorage.getItem('list'))
  },
  methods:{}
}
</script>

<style lang="less" scoped>
  .about{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  a{
    display: block;
    width: 150px;
    height: 100px;
    line-height: 100px;
    color: #333;
    text-align: center;
    text-decoration: none;
    background: #fff;
    transition: background 1s;
    &:hover{
      background: deepskyblue;
    }
  }
</style>