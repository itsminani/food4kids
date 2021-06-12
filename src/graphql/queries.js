/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBag = /* GraphQL */ `
  query GetBag($id: ID!) {
    getBag(id: $id) {
      id
      bag_name
      speciality_diet
      contents
      createdAt
      updatedAt
    }
  }
`;
export const listBags = /* GraphQL */ `
  query ListBags(
    $filter: ModelBagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bag_name
        speciality_diet
        contents
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFood = /* GraphQL */ `
  query GetFood($id: ID!) {
    getFood(id: $id) {
      id
      fdcId
      description
      lowercaseDescription
      foodCategory
      foodNutrients
      createdAt
      updatedAt
    }
  }
`;
export const listFoods = /* GraphQL */ `
  query ListFoods(
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fdcId
        description
        lowercaseDescription
        foodCategory
        foodNutrients
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNutrient = /* GraphQL */ `
  query GetNutrient($id: ID!) {
    getNutrient(id: $id) {
      id
      tracked
      nutrientName
      createdAt
      updatedAt
    }
  }
`;
export const listNutrients = /* GraphQL */ `
  query ListNutrients(
    $filter: ModelNutrientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNutrients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tracked
        nutrientName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
