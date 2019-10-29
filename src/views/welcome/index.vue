<template>
  <div class="container">
    <img src="../../assets/welcome.jpg" alt />
  </div>
</template>

<script>
export default {
  created () {
    this.$axios
      .get('articles')
      .then(rel => {
        console.log(rel)
      })
      .catch(() => {
        console.log('error')
      })
  }
}
</script>

<style lang="less" scoped>
.container {
  img {
    display: block;
    margin: 0 auto;
  }
}
</style>
