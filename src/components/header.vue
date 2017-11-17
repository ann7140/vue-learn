<template>
    <div class="header">
        123
        <el-dialog :visible.sync="visible" title="Hello world">
          <p>欢迎使用 Element</p>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data () {
    return {
      visible: true
    }
  }
}
</script>
<style lang="scss">
.header{
}
</style>
