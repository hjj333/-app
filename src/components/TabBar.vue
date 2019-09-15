<template>
  <div class="tab_bar">
    <div class="container">
      <router-link to="/home" class="active">
        <i class="iconfont icon-dianying"></i>
        <p>电影</p>
      </router-link>
      <router-link to="/movie">
        <i class="iconfont icon-yingyuan"></i>
        <p>影院</p>
      </router-link>
      <router-link to="profile">
        <i class="iconfont icon-wode"></i>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.tab_bar {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  border-top: 2px solid #ebe8e3;
  .container {
      height: 50px;
      text-align: center;
      display: flex;
      align-items: center;
      a {
          flex: 1;
          &.router-link-active {
              color: #f03d37;
          }
          i {
              font-size: 20px
          }
          p {
              font-size: 12px;
              line-height: 18px;
          }
      }
  }
}
</style>