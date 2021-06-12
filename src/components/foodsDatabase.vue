<template>
  <div>
    <div class="flex flex-center">
      <q-btn label="Add Food" color="primary" @click="prompt = true" />
      <q-dialog v-model="prompt">
        <q-card style="min-width: 400px">
          <q-card-section>
            <div class="text-h6">Add Food To Database</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <searchFoods />
          </q-card-section>

          <!-- <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Add address" v-close-popup />
          </q-card-actions> -->
        </q-card>
      </q-dialog>
    </div>
    <q-table
      v-if="foods"
      :grid="$q.screen.xs"
      :data="foods"
      :columns="columns"
      row-key="id"
      :filter="filter"
      class="my-sticky-header-table q-my-md"
      title="Foods"
      flat
      bordered
    >
      <template v-slot:top-right>
        <q-input
          dense
          color="white"
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>

    <q-table v-if="foods" title="Foods" :data="foods" :columns="columns" row-key="fdcId">
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn
              size="sm"
              color="accent"
              round
              dense
              @click="props.expand = !props.expand"
              :icon="props.expand ? 'remove' : 'add'"
            />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              <div
                v-for="nutrient in props.row.foodNutrients"
                :key="nutrient.id"
              >
                {{nutrient.nutrientName}}=> <b>{{nutrient.value}}{{nutrient.unitName}}</b> 
                
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { createFood } from "@/graphql/mutations";
import { listFoods } from "@/graphql/queries";
import searchFoods from "@/components/searchFood.vue";
export default {
  data() {
    return {
      food: {},
      foods: null,
      prompt: false,
      filter: "",
      columns: [
        {
          name: "fdcId",
          required: true,
          label: "fdcId",
          field: "fdcId",
          align: "left",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "description",
          align: "center",
          label: "description",
          field: "description",
          sortable: true,
        },
        {
          name: "Category",
          align: "center",
          label: "Category",
          field: "foodCategory",
          sortable: true,
        },
      ],
    };
  },
  components: {
    searchFoods,
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
      this.foods = foods.data.listFoods.items;
      console.log(this.foods)
      this.foods.forEach(food => {
        food.foodNutrients=JSON.parse(food.foodNutrients)
        food.foodNutrients= food.foodNutrients.slice(0,10)
      });
      console.log(this.foods.foodNutrients)
    },
  },
};
</script>


<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  min-height: 310px
  max-height: 600px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #c1f4cd

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
