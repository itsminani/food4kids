<template>
  <div>
    <div class="Title">Recently used Bags</div>
    <q-separator bold strong></q-separator>
    <bag />
    <bag />
    <bag />
    <bag />
  </div>
</template>
<script>
import bag from "./bag";
export default {
  data() {
    return {};
  },
  components: {
    bag,
  },
};
</script>

<style>
.Title {
  text-align: center;
  font-size: 30px;
  color: light-grey;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>