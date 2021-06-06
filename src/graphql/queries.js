/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBag = /* GraphQL */ `
  query GetBag($id: ID!) {
    getBag(id: $id) {
      id
      bag_name
      halal
      creator_name
      creation_date
      contents {
        items {
          id
          title
          bagID
          createdAt
          updatedAt
        }
        nextToken
      }
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
        halal
        creator_name
        creation_date
        contents {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
      id
      title
      bagID
      createdAt
      updatedAt
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        bagID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFoods = /* GraphQL */ `
  query GetFoods($id: ID!) {
    getFoods(id: $id) {
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
export const listFoodss = /* GraphQL */ `
  query ListFoodss(
    $filter: ModelFoodsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoodss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
