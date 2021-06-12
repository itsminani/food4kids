<template>
  <div class="p-mt-md">
    <q-card class="my-card q-my-sm q-mx-sm">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6" style="padding: 0px">{{ bag.bag_name }}</div>
            <div class="text-subtitle2">{{ date }}</div>
          </div>

          <div class="col-auto">
            <q-fab
              v-model="fab2"
              padding="5px"
              external-label
              label="Actions"
              vertical-actions-align="left"
              color="green-5"
              icon="keyboard_arrow_down"
              direction="left"
            >
              <q-fab-action
                external-label
                color="primary"
                @click="showAddFood = true"
                icon="add"
              />
              <q-fab-action
                external-label
                color="red"
                @click="onClick()"
                icon="delete"
              />
            </q-fab>
            <q-dialog persistent style="width: 600px" v-model="showAddFood">
              <addFood :bagId="bag.id"/>
            </q-dialog>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-list dense bordered separator>
          <div v-for="item in bag.contents" :key="item.id">
            <q-item clickable v-ripple>
              <q-item-section>{{ item.description }}</q-item-section>
            </q-item>
            <q-separator></q-separator>
          </div>
        </q-list>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import addFood from "./addFood.vue";
export default {
  data() {
    return {
      showAddFood: false,
      fab2: false,
      date: "",
      foodBag: {
        title: "Halal",
        foodContents: ["Banana", "Rice", "Chocolate", "Porridge"],
      },
    };
  },
  watch: {
    showAddFood: function () {
      console.log(this.showAddFood);
    },
  },
  components: {
    addFood,
  },
  created() {
    this.sliceDate();
    const contents = this.bag.contents;
    this.bag.contents =JSON.parse(contents)
  },
  computed:{
    // bagWithContents() {
    //   return JSON.parse(this.bag.contents)
    // }
  },
  props: ["bag"],
  methods: {
    sliceDate() {
      this.date = this.bag.createdAt;
      this.date = this.date.slice(0, 10);
    },
    onClick() {
      console.log("Ok Boi");
    },
  },
};
</script>

<style>
</style>