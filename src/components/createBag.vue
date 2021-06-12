<template>
  <div>
    <div class="text-center">
      <h5>Food4Kids Waterloo Region Bag Management</h5>
      <p>
        Food4Kids Waterloo Region provides packages of healthy food for kids
        ages 1 - 14 years, living with chronic hunger, We deliver food to the
        children on days when they do not attend school. (Weekends, and daily
        during the 84 days of school breaks). Volunteers play a significant role
        in providing their many talents to pack and deliver bags to the schools
        and homes of the children we serve. Over 2,500 children, within Waterloo
        Region, live with chronic hunger. During the 2020-21 school year, we are
        increasing our support to over 860 kids. Help make a significant and
        positive impact in our community by supporting these vulnerable
        children. Feed the HOPE of chronically hungry children today! Charitable
        Number: 75126 9895 RR0001
      </p>
    </div>
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
          component: "h4",
          children: "Create Bag",
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