<template>
  <div>
    <p>软件顺序按照 windows10 设置-应用中的顺序排列，名称也是应用在设置-应用中显示的名称</p>
    <div class="box">
    <a v-for="(item,index) in listData" :key="index" :href="item.url">{{item.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: require("@/assets/app.json"),
    };
  },
};
</script>

<style>
.box{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a{
  padding: 10px 16px;
  text-decoration: none;
  color: #555;
}
a:hover{
  color: #f80;
}
</style>