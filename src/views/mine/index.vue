<template>
  <div class='main'>
    <Header title="我的" />
    <Login />
    <Tabbar />
  </div>
</template>

<script>
import Header from '@/components/header/index.vue'
import Tabbar from '@/components/tabbar/index.vue'
import Login from '@/components/login/index.vue'
export default {
  name:'Mine',
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  created() {

  },
  mounted() {

  },
  components: {
    Header,
    Tabbar,
    Login
  },
}
</script>

<style scoped>

</style>
