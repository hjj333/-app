<template>
  <div class="city">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li v-for="item in hotList" :key="item.id">{{item.nm}}</li>
        </ul>
      </div>
      <div class="city_sort" ref="city_sort">
        <div v-for="item in cityList" :key="item.index">
          <h2>{{item.index}}</h2>
          <ul>
            <li v-for="city in item.list" :key="city.id">{{city.nm}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li v-for="(item, index) in cityList" :key="index" @touchstart="handleToIndex(index)">{{item.index}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cityList: [],
      hotList: []
    };
  },
  mounted() {
    this.$axios.get("/city").then(res => {
      let { cityList, hotList } = this.formatCityList(
        res.data.data.data.cities
      );
      this.cityList = cityList;
      this.hotList = hotList;
      console.log(this.cityList,this.hotList );
      
    });
  },
  methods: {
    formatCityList(cities) {
      var cityList = [];
      var hotList = [];
      for (var i = 0; i < cities.length; i++) {
        // 截取城市拼音的首字母
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (toCom(firstLetter)) {
          // 首字母不相等,添加到总列表
          cityList.push({
            index: firstLetter, // 首字母
            list: [{ nm: cities[i].nm, id: cities[i].id }] // 首字母相同的列表
          });
        } else {
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              // 添加首字母相同列表
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }
      function toCom(firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            // 首字母相同返回false
            return false;
          }
        }
        // 首字母不同返回true
        return true;
      }
      // 按首字母排序
      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        } else if (n1.index < n2.index) {
          return 0;
        }
      });
      // 生成热门城市列表
      for (let i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i]);
        }
      }
      return { cityList, hotList };
    },
    handleToIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName('h2')
      // 滚动条位置 = h2标签的offsetParent元素的顶部内边距的距离。
      this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop
    }
  }
};
</script>
<style lang="less">
.city {
  margin-top: 96px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  .city_list {
    flex: 1;
    overflow: auto;
    background: #fff5f0;
    &::-webkit-scrollbar {
      background-color: transparent;
      width: 0;
    }
    .city_hot {
      margin-top: 20px;
      h2 {
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background: #f0f0f0;
        font-weight: normal;
      }
      ul {
        list-style: none;
        li {
          float: left;
          background: #fff;
          width: 29%;
          height: 33px;
          margin-top: 15px;
          margin-left: 3%;
          padding: 0 4px;
          border: 1px solid #e6e6e6;
          border-radius: 3px;
          line-height: 33px;
          text-align: center;
          box-sizing: border-box;
        }
      }
    }
    .city_sort {
      div {
        margin-top: 20px;
      }
      h2 {
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background: #f0f0f0;
        font-weight: normal;
      }
      ul {
        padding-left: 10px;
        margin-top: 10px;
        list-style: none;
        li {
          line-height: 30px;
          line-height: 30px;
        }
      }
    }
  }
  .city_index {
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: 1px #e6e6e6 solid;
    ul {
      list-style: none;
    }
  }
}
</style>
