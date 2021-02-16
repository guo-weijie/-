<template>
  <el-container>
    <el-aside>
      <NavMenu />
    </el-aside>
    <el-main><router-view /></el-main>
  </el-container>
</template>

<script>
import NavMenu from '@/components/NavMenu'
export default {
  components:{
    NavMenu
  }
}
</script>

<style lang="less">

</style>
