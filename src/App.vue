<template>
  <div class="main">
    <q-layout view="lHh Lpr lFf">
      <q-header>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
          />

          <q-toolbar-title> Food4Kids </q-toolbar-title>

          <div><img class="image" style="height: 30px" src="https://static.wixstatic.com/media/a0c0a9_36c504d176b748b0a6ccbf941eddbc45~mv2.png/v1/fill/w_222,h_56,al_c,q_85,usm_0.66_1.00_0.01/F4KWR_HORZ_.webp" alt="Food4Kids Waterloo"></div>
          <q-btn
            dense
            flat
            round
            icon="menu"
            @click="rightDrawer = !rightDrawer"
          />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        elevated
        class="print-hide"
        bordered
        content-class="bg-grey-2"
      >
        <q-list>
          <q-item-label header>Links</q-item-label>
          <q-item clickable tag="a" to="/createBag">
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
              <q-item-label caption>Test</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" to="/listBags">
            <q-item-section avatar>
              <q-icon name="folder" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Statistics</q-item-label>
              <q-item-label caption>Stats for Bags</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/calendar">
            <q-item-section avatar>
              <q-icon name="book" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Calendar</q-item-label>
              <q-item-label caption>Bags By date</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/foodDatabase">
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Foods</q-item-label>
              <q-item-label caption>Database</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/recommendations">
            <q-item-section avatar>
              <q-icon name="support" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Food Recommendations</q-item-label>
              <q-item-label caption>Recommendations</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
      <q-drawer show-if-above v-model="rightDrawer" side="right" bordered>
        <!-- drawer content -->
        <drawerRight />
      </q-drawer>
      <q-page-container>
        <mainLayout />
        <div class="">
          <!-- <q-input class="print-hide" type="text" label="Mesage"></q-input> <br /> -->
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import mainLayout from "./components/mainLayout.vue";
import drawerRight from "./components/drawerRight.vue";

export default {
  name: "LayoutDefault",

  components: {
    mainLayout,
    drawerRight,
  },

  data() {
    return {
      leftDrawerOpen: false,
      rightDrawer: false,
    };
  },
  methods: {
    redirect() {},
  },
};
</script>

<style scoped>
.main {
}
.image {
    border-radius: 5px;
    padding: 2px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
