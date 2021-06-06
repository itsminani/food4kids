<template>
  <q-page class="">
    <!-- <img alt="Test" src="../assets/Test.jpg" /> -->
    <div class="cards q-mx-sm">
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
    </div>
  </q-page>
</template>

<style></style>

<script>
import card from "./card";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components: {
    card,
  },
  methods: {},

};
</script>

<style >
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid: 20px;
  font-family: sans-serif;
}
</style>