import { API } from "aws-amplify";
import { listFoods } from "@/graphql/queries.js";

export const listFoodsAction = async ({ commit }) => {
    try {
        const foodsResponse = await API.graphql({
            query: listFoods,
        });
        const foods = foodsResponse.data.listFoods.items;
        console.log(foods);
        foods.forEach((food) => {
            food.foodNutrients = JSON.parse(food.foodNutrients);
            food.foodNutrients = food.foodNutrients.slice(0, 10);
        });
    commit("SET_LISTED_FOODS", foods)
    } catch (error) {
        console.log(error);
    }
}
// export const createLogAction = async ({ commit, dispatch }, log) => {
//   try {
//     console.log(log);
//     const logResponse = await API.graphql({
//       query: createLog,
//       variables: { input: log }
//     });
//     console.log(logResponse);
//     commit("CREATE_LOG", logResponse.data.createLog);
//     // Add the extra log to be searchable
//     dispatch("mails/updateSearchTerm", logResponse.data.createLog.mailID, {
//       root: true
//     });
//   } catch (err) {
//     console.log(err);
//     dispatch(
//       "notification/addNotification",
//       {
//         type: "Success",
//         message: "Whoops, something went wrong.",
//         color: "error"
//       },
//       {
//         root: true
//       }
//     );
//   }
// };

// export const setLogsAction = async ({ commit }, logs) => {
//   // If there are logs
//   if (logs.items) {
//     commit("SET_LISTED_LOGS", logs.items);
//   } else {
//     commit("SET_LISTED_LOGS", []);
//   }
// };
