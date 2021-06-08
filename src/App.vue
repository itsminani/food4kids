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

          <q-toolbar-title> Design Tests </q-toolbar-title>

          <div>App v{{ $q.version }}</div>
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
          <q-item-label header>Test 1</q-item-label>
          <q-item clickable tag="a" to="/searchFood">
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

<style>
.main {
}
</style>
