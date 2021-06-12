<template>
  <div class="main q-ma-md ">
    <router-view></router-view>
    <!-- Router This is your Home brooo -->
  </div>
</template>

<script>

export default {
  components: {
  },
  created() {
    this.$store.dispatch("foods/listFoodsAction")
  },
  data() {
    return {};
  },
};
</script>
<style>
.main{
  height: 100%;
  background-image: url("https://media-exp1.licdn.com/dms/image/C4D1BAQGjHeXnWevzRg/company-background_10000/0/1582221680983?e=2159024400&v=beta&t=__933Z_lNpCk_cZ-IasifyyMFw3d-xADZrjT7fQpt0E");
}
</style>