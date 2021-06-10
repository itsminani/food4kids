<template>
  <div>
    <q-card style="min-height: 600px; min-width: 550px">
      <q-card-section>
        <div class="text-h6">Add Food To Database</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-table
          v-if="foods"
          :grid="$q.screen.xs"
          :data="foods"
          :columns="columns"
          row-key="id"
          :filter="filter"
          class="my-sticky-header-table q-my-md"
          title="Treats"
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
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat @click="getFoods()" label="Cancel" v-close-popup />
        <q-btn flat label="Add address" v-close-popup />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      food: {},
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
  computed: {
    foods() {
      return this.$store.state.foods.foods;
    },
  },
  methods: {
    getFoods() {
      console.log(this.$store.state.foods.foods);
    },
  },
};
</script>