<template>
  <div class="home">
      <div class="menu">
        <router-link tag="div" to="/home/city" class="city">
          <span>武汉</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot">
          <router-link tag="div" to="/home/playing" class="hot_item active">正在热映</router-link>
          <router-link tag="div" to="/home/coming" class="hot_item">即将上映</router-link>
        </div>
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {}
};
</script>
<style lang="less">
.home {
  width: 100%;
  height:100%;
  margin-top: 51px;
  margin-bottom: 52px;
    .menu {
      height: 45px;
      width: 100%;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      .city {
        margin-left: 20px;
        height: 100%;
        line-height: 45px;
      }
      .hot {
        flex: 1;
        display: flex;
        height: 100%;
        line-height: 45px;
        .hot_item {
          flex: 1;
          font-size: 15px;
          color: #666;
          margin: 0 12px;
          font-weight: 700;
          &.active {
            color: #ef4238;
            border-bottom: 2px #ef4238 solid;
          }
        }
      }
      .search {
        margin-right: 20px;
        height: 100%;
        width: 22px;
        line-height: 45px;
        i {
          font-size: 24px;
          color: red;
        }
      }
    }
}
</style>