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
<style></style>