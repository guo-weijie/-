<template>
  <el-menu router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-video-camera"></i>
          <span>视频</span>
        </template>
        <el-submenu v-for="(item,index) in listData" :index='item.index+10086' :key="index">
          <template slot="title">
            <i class="el-icon-moon-night"></i>
            {{item.title}}
          </template>
          <el-menu-item v-for="(sonItem,sonIndex) in item.step" :index="sonItem.index" :key="sonIndex+10010" :route="{name:'Qsmy',params:{list:sonItem.content}}" @click="aaa(sonItem.content)">
            <i class="el-icon-light-rain"></i>
            {{sonItem.name}}
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-picture-outline-round"></i>
          <span>CSS</span>
        </template>
        <el-menu-item index="2-1" :route="{path: '/css/macao'}">
          <i class="el-icon-bell"></i>
          <span slot="title">美女荷官在线发牌</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3" :route="{path:'/app/download'}">
        <i class="el-icon-goods"></i>
        <span slot="title">常用软件下载链接</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  data(){
    return{
      listData:require('@/assets/data.json')
    }
  },
  methods:{
    aaa(val){
      localStorage.setItem('list',JSON.stringify(val))
    }
  }
}
</script>

<style lang="less" scoped>

</style>