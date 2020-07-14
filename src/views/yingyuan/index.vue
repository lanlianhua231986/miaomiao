<template>
  <div id="content">
    <Header title="影院" />
    <div class="cinema_menu">
      <div class="city_switch">
        全城
        <i class="iconfont icon-lower-triangle"></i>
      </div>
      <div class="brand_swtich">
        品牌
        <i class="iconfont icon-lower-triangle"></i>
      </div>
      <div class="feature_switch">
        特色
        <i class="iconfont icon-lower-triangle"></i>
      </div>
    </div>
    <Clist />
    <Tabbar />
  </div>
</template>

<script>
import Header from "@/components/header/index.vue";
import Tabbar from "@/components/tabbar/index.vue";
import Clist from "@/components/clist/index.vue";
export default {
  name: "Yingyuan",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  components: {
    Header,
    Tabbar,
    Clist
  }
};
</script>

<style scoped>

</style>
