<template>
  <div class="flex flex-center">
    <q-btn label="Add Food" color="primary" @click="prompt = true" />
    <q-dialog v-model="prompt">
      <q-card style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">Add Food To Database</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <searchFoods/>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { createFood } from "@/graphql/mutations";
import { listFoods } from "@/graphql/queries";
import searchFoods from "@/components/searchFood.vue"
export default {
  data() {
    return {
      food: {},
      foods: null,
      prompt: false,
    };
  },
  components: {
      searchFoods
  },
  created() {
    this.getFoods();
  },
  methods: {
    async createFoods() {
      await API.graphql({
        query: createFood,
        variables: { input: this.food },
      });
    },
    async getFoods() {
      const foods = await API.graphql({
        query: listFoods,
      });
      this.foods = foods.data.listTodos.items;
    },
  },
};
</script>