<template>
  <div>
    <FormulateForm v-model="bag" :schema="schemaCreateBag" @submit="save()" />
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { createBag } from "@/graphql/mutations";

export default {
  data() {
    return {
      bag: {},
      schemaCreateBag: [
        {
          component: "h3",
          children: "Bag Info",
        },
        {
          label: "Bag name",
          name: "bag_name",
          validation: "required",
        },
        {
          label: "Speciality Diet",
          name: "speciality_diet",
        },
        {
          label: "Save",
          type: "submit",
        },
      ],
    };
  },
  methods: {
    async save() {
      try {
        const bagResponse = await API.graphql({
          query: createBag,
          variables: { input: this.bag },
        });
        console.log(bagResponse);
        this.$q.notify("Bag Created Successfull");
      } catch (error) {
        console.log(error);
        this.$q.notify("Failed Creating Bag");
      }
    },
  },
};
</script>