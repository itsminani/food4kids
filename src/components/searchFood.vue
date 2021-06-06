<template>
  <q-page class="flex flex-center">
    <q-select
      filled
      v-model="searchValue"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      @input-value="setModel"
      hint="Text autocomplete"
      style="width: 250px; padding-bottom: 32px"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select>
    <p>{{ searchValue }}</p>
  </q-page>
</template>

<style></style>

<script>
export default {
  name: "HelloWorld",
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
    },

    setModel(val) {
      this.model = val;
    },
  },
};
</script>