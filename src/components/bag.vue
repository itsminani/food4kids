<template>
  <div class="p-mt-md">
    <q-card class="my-card q-my-sm q-mx-sm">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6" style="padding: 0px">{{ bag.bag_name }}</div>
            <!-- <div class="text-subtitle2">{{foodBag.foodContents}}</div> -->
          </div>

          <div class="col-auto">
            <q-fab
              v-model="fab2"
              label="Actions"
              external-label
              vertical-actions-align="left"
              color="purple"
              icon="keyboard_arrow_down"
              direction="left"
              
            >
              <q-fab-action
                external-label
                color="primary"
                @click="showAddFood=true"
                icon="mail"
              />
              <q-fab-action
                external-label
                color="secondary"
                @click="onClick()"
                icon="alarm"
              />
              <q-fab-action
                external-label
                color="orange"
                @click="onClick()"
                icon="airplay"
              />
              <q-fab-action
                external-label
                color="accent"
                @click="onClick()"
                icon="room"
              />
            </q-fab>
            <q-dialog v-model="showAddFood">
            <addFood/>
            </q-dialog>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-list dense bordered separator>
          <div v-for="item in foodBag.foodContents" :key="item">
            <q-item clickable v-ripple>
              <q-item-section>{{ item }}</q-item-section>
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
      fab2:false,
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
  props: ["bag"],
  methods: {
    onClick(){
      console.log("Ok Boi")
    }
  },
};
</script>

<style>
</style>