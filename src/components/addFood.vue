<template>
  <div>
    <q-card style="min-height: 600px; width: 450px">
      <q-card-section>
        <div class="text-h6">Add Food To Database</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-table
          title="Foods"
          :data="foods"
          :columns="columns"
          row-key="id"
          selection="multiple"
          :selected.sync="selected"
          :filter="filter"
          grid
          hide-header
        >
          <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>

          <template v-slot:item="props">
            <div
              class="q-pa-xs col-md-6 grid-style-transition"
              :style="props.selected ? 'transform: scale(0.95);' : ''"
            >
              <q-card
                style="min-width: 190px"
                :class="props.selected ? 'bg-grey-2' : ''"
              >
                <q-card-section>
                  <q-checkbox
                    dense
                    v-model="props.selected"
                    :label="props.row.name"
                  />
                </q-card-section>
                <q-separator />
                <q-list dense>
                  <q-item
                    v-for="col in props.cols.filter(
                      (col) => col.name !== 'desc'
                    )"
                    :key="col.name"
                  >
                    <q-item-section>
                      <q-item-label>{{ col.label }}</q-item-label>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label caption>{{ col.value }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card>
            </div>
          </template>
        </q-table>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn
          color="green"
          label="Add Food"
          @click="addFoodToBag()"
          v-close-popup
        />
        <q-btn flat color="red" label="Cancel" v-close-popup />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { updateBag } from "@/graphql/mutations";
import { getBag } from "@/graphql/queries";

export default {
  data() {
    return {
      food: {},
      filter: "",
      selected: [],
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
  computed: {
    foods() {
      return this.$store.state.foods.foods;
    },
  },
  props: ["bagId"],
  created() {},
  mounted() {
    this.getBag();
  },
  methods: {
    async getBag() {
      console.log(this.bagId);
      const bagResponse = await API.graphql({
        query: getBag,
        variables: { id: this.bagId },
      });
      this.bag = bagResponse.data.getBag;
      if (this.bag.contents){
        this.selected = JSON.parse(this.bag.contents);
      }
      console.log(this.bag);
    },
    async addFoodToBag() {
      const newBag = {};
      newBag.contents = JSON.stringify(this.selected);
      newBag.id = this.bagId;
      console.log(newBag);
      try {
        const updatedBag = await API.graphql({
          query: updateBag,
          variables: { input: newBag },
        });
        this.$store.commit("foods/UPDATE_BAG", newBag);
        console.log(updatedBag);
      } catch (error) {
        console.log(error);
      }
    },
    getFoods() {
      console.log(this.$store.state.foods.foods);
    },
  },
};
</script>


<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
</style>