<template>
  <div class="p-mt-md">
    <q-card class="my-card q-my-sm q-mx-sm">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6" style="padding: 0px">{{ foodBag.title }}</div>
            <!-- <div class="text-subtitle2">{{foodBag.foodContents}}</div> -->
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Remove Card</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Send Feedback</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Share</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-list dense bordered separator>
          <div v-for="item in foodBag.foodContents" :key="item">
            <q-item clickable v-ripple>
              <q-item-section>{{item}}</q-item-section>
            </q-item>
            <q-separator></q-separator>
          </div>
        </q-list>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodBag: {
        title: "Halal",
        foodContents: ["Banana", "Rice", "Chocolate", "Porridge"],
      },
    };
  },
};
</script>

<style>
</style>