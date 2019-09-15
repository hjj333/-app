<template>
  <div class="playing">
    <ul>
      <li v-for="(item, index) in 6" :key="index">
        <div class="img">
          <img src="../assets/logo.png" alt />
        </div>
        <div class="info">
          <h2>无名</h2>
          <p>观众评价<span class="rating">9.2</span></p>
          <p>主演：刘德华</p>
          <p>今天44家影院放映77场</p>
        </div>
        <div class="btn_buy">购票</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.playing {
  flex: 1;
  overflow: hidden;
  ul {
    margin: 0 12px;
    padding: 0;
    overflow: hidden;
    li {
      margin-top: 12px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;
      padding-bottom: 10px;
      .img {
        width: 64px;
        height: 90px;
        img {
          width: 100%;
        }
      }
      .info {
        margin-left: 10px;
        flex: 1;
        position: relative;
        text-align: left;
        h2 {
          font-size: 17px;
          line-height: 24px;
          width: 150px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p {
          font-size: 13px;
          color: #666;
          line-height: 22px;
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .rating{ font-weight: 700; color: #faaf00; font-size: 15px;}
      }
      .btn_buy {
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        background-color: #f03d37;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
}
</style>