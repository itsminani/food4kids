<template>
  <div>
    <div class="Title">Recently used Bags</div>
    {{ bags }}
    <q-separator bold strong></q-separator>
    <div v-for="bag in bags" :key="bag.id">
      <bag v-bind:bag="bag" />
    </div>
  </div>
</template>
<script>
import bag from "./bag";
import { API } from "aws-amplify";
import { listBags } from "@/graphql/queries";
export default {
  data() {
    return {
      bags: null,
    };
  },
  components: {
    bag,
  },
  created() {
    this.getBags();
  },
  methods: {
    async getBags() {
      const bags = await API.graphql({
        query: listBags,
      });
      console.log(bags);
      this.bags = bags.data.listBags.items;
    },
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