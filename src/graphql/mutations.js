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
      speciality_diet
      contents {
        items {
          id
          foodID
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
      speciality_diet
      contents {
        items {
          id
          foodID
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
      speciality_diet
      contents {
        items {
          id
          foodID
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
      foodID
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
      foodID
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
      foodID
      title
      bagID
      createdAt
      updatedAt
    }
  }
`;
export const createFood = /* GraphQL */ `
  mutation CreateFood(
    $input: CreateFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    createFood(input: $input, condition: $condition) {
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
export const updateFood = /* GraphQL */ `
  mutation UpdateFood(
    $input: UpdateFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    updateFood(input: $input, condition: $condition) {
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
export const deleteFood = /* GraphQL */ `
  mutation DeleteFood(
    $input: DeleteFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    deleteFood(input: $input, condition: $condition) {
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
export const createNutrient = /* GraphQL */ `
  mutation CreateNutrient(
    $input: CreateNutrientInput!
    $condition: ModelNutrientConditionInput
  ) {
    createNutrient(input: $input, condition: $condition) {
      id
      tracked
      nutrientName
      createdAt
      updatedAt
    }
  }
`;
export const updateNutrient = /* GraphQL */ `
  mutation UpdateNutrient(
    $input: UpdateNutrientInput!
    $condition: ModelNutrientConditionInput
  ) {
    updateNutrient(input: $input, condition: $condition) {
      id
      tracked
      nutrientName
      createdAt
      updatedAt
    }
  }
`;
export const deleteNutrient = /* GraphQL */ `
  mutation DeleteNutrient(
    $input: DeleteNutrientInput!
    $condition: ModelNutrientConditionInput
  ) {
    deleteNutrient(input: $input, condition: $condition) {
      id
      tracked
      nutrientName
      createdAt
      updatedAt
    }
  }
`;
