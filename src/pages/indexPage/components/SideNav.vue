<template>
  <el-row class="tac">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>过滤</template>
        <el-menu-item-group>
          <template slot="title">按分类</template>
          <el-menu-item index="1-1">书名</el-menu-item>
          <el-menu-item index="1-2">作者</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">按属性</template>
          <el-menu-item index="1-3">价格</el-menu-item>
          <el-menu-item index="1-4">数量</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>查询</el-menu-item>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>管理</template>
        <el-menu-item-group>
          <template slot="title">操作</template>
          <el-menu-item index="3-1">添加</el-menu-item>
          <el-menu-item index="3-2">删除</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-row>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang='sass'>
  .el-row {
    margin-right: 20px;
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }
</style>