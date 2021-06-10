<template>
  <div>
    <q-page class="">
      <createBag/>
      <q-select
        filled
        v-model="searchValue"
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        placeholder="Search Food"
        :options="options"
        @filter="filterFn"
        @input-value="setModel"
        hint="Search food"
        style="min-width: 400px; padding-bottom: 32px"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> No results </q-item-section>
          </q-item>
        </template>
      </q-select>
      
      <q-card v-if="!!searchValue" class="my-card">
        <q-card-section>
          <div class="text-h6">
            {{ searchValue.description }}
          </div>
          <div class="text-subtitle2">
            Food Category: <b>{{ searchValue.foodCategory }}</b>
          </div>
        </q-card-section>

        <q-separator />
        <q-card-section>
          fcdId: {{ searchValue.fdcId }} <br />
          description: {{ searchValue.description }} <br />
          Category: {{ searchValue.foodCategory }} <br />
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn @click="save()" color="primary">Add To Database</q-btn>
          <q-btn @click="removeCard()" color="red">Cancel</q-btn>
        </q-card-actions>
      </q-card>
    </q-page>
  </div>
</template>

<style></style>
<script>
import createBag from "./createBag.vue"
import { API } from "aws-amplify";
import { createFood } from "@/graphql/mutations";
import { listFoods } from "@/graphql/queries";
export default {
  name: "HelloWorld",
  components: {
    createBag
  },
  data: () => ({
    api_url: "",
    searchValue: null,
    params: {
      apiKey: "Cb7mfivVlrk9JP7XuHjOG5gQ39ZtkrWyAChnRtMW",
      dataType: ["Survey (FNDDS)"],
      pagesize: 10,
    },
    options: [],
  }),
  methods: {
    async save() {
      // Check if the food already exists in the database
      try {
        const filter = {
          fdcId: {
            eq: this.searchValue.fdcId,
          },
        };
        const checkFoodResponse = await API.graphql({
          query: listFoods,
          variables: { filter: filter },
        });
        if (checkFoodResponse.data.listFoods.items[0]) {
          this.$q.notify("Food already exist in the database");
        } else {
          // Do your thing
          const foodToSend = {};
          foodToSend.fdcId = this.searchValue.fdcId;
          foodToSend.description = this.searchValue.description;
          foodToSend.lowercaseDescription =
            this.searchValue.lowercaseDescription;
          foodToSend.foodCategory = this.searchValue.foodCategory;
          foodToSend.foodNutrients = JSON.stringify(this.searchValue.foodNutrients)
          console.log(foodToSend.foodNutrients)
          try {
            const foodResponse = await API.graphql({
              query: createFood,
              variables: { input: foodToSend },
            });
            console.log(foodResponse);
            this.$q.notify("Food Added Successfully");
          } catch (error) {
            console.log(error);
            this.$q.notify("Failed Adding Food to database");
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    removeCard() {
      this.searchValue = null;
    },
    async filterFn(val, update, abort) {
      this.api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(
        this.params.apiKey
      )}&query=${encodeURIComponent(val)}&dataType=${encodeURIComponent(
        this.params.dataType
      )}&pageSize=${encodeURIComponent(this.params.pagesize)}`;
      console.log(this.api_url);

      if (val.length < 4) {
        abort();
        return;
      }
      const results = await fetch(this.api_url).then((response) =>
        response.json()
      );
      console.log(results);
      update(() => {
        // const needle = val.toLocaleLowerCase();
        results.foods.forEach((food) => (food.label = food.description));
        this.options = results.foods;
        // stringOptions.filter(
        //   (v) => v.toLocaleLowerCase().indexOf(needle) > -1
        // );
      });
      console.log(this.searchValue);
    },
    setModel(val) {
      this.model = val;
    },
  },
};
</script>