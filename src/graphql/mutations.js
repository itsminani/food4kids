/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBag = /* GraphQL */ `
  mutation CreateBag(
    $input: CreateBagInput!
    $condition: ModelBagConditionInput
  ) {
    createBag(input: $input, condition: $condition) {
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
export const updateBag = /* GraphQL */ `
  mutation UpdateBag(
    $input: UpdateBagInput!
    $condition: ModelBagConditionInput
  ) {
    updateBag(input: $input, condition: $condition) {
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
export const deleteBag = /* GraphQL */ `
  mutation DeleteBag(
    $input: DeleteBagInput!
    $condition: ModelBagConditionInput
  ) {
    deleteBag(input: $input, condition: $condition) {
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
export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
      id
      title
      bagID
      createdAt
      updatedAt
    }
  }
`;
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
      id
      title
      bagID
      createdAt
      updatedAt
    }
  }
`;
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
      id
      title
      bagID
      createdAt
      updatedAt
    }
  }
`;
export const createFoods = /* GraphQL */ `
  mutation CreateFoods(
    $input: CreateFoodsInput!
    $condition: ModelFoodsConditionInput
  ) {
    createFoods(input: $input, condition: $condition) {
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
export const updateFoods = /* GraphQL */ `
  mutation UpdateFoods(
    $input: UpdateFoodsInput!
    $condition: ModelFoodsConditionInput
  ) {
    updateFoods(input: $input, condition: $condition) {
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
export const deleteFoods = /* GraphQL */ `
  mutation DeleteFoods(
    $input: DeleteFoodsInput!
    $condition: ModelFoodsConditionInput
  ) {
    deleteFoods(input: $input, condition: $condition) {
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
