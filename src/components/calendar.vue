<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 450px">
      <template v-slot:before>
        <div class="q-pa-sm">
          <q-date v-model="date" :events="events" event-color="orange" />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="date"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel
            v-for="bag in bags"
            :key="bag.id"
            :name="bag.creation_date"
          >
            <div class="text-h5 q-mb-md">Bag(s) Given on {{ date }}</div>
            <div v-for="bag in bags" v-bind:key="bag.id">
              <div v-if="bag.creation_date == date">
                <bag :bag="bag" />
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>



<script>
import { API } from "aws-amplify";
import { listBags } from "@/graphql/queries";
import bag from "./bag.vue";
export default {
  data() {
    return {
      splitterModel: 50,
      date: "2021/06/01",
      events: [],
      bags: null,
      eventDate: "",
    };
  },
  created() {
    this.getBags();
  },
  components: {
    bag,
  },
  methods: {
    async getBags() {
      let bags = await API.graphql({
        query: listBags,
      });
      console.log(bags);
      this.bags = bags.data.listBags.items;
      this.bags.forEach((item) => {
        this.eventDate = item.createdAt.slice(0, 10);
        this.eventDate = this.eventDate.replace(/-/g, "/");
        console.log(this.eventDate);
        this.events.push(this.eventDate);
        item.creation_date = this.eventDate;
      });

      console.log(this.bags);
      console.log("Hey");
    },
  },
};
</script>