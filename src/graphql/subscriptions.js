/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBag = /* GraphQL */ `
  subscription OnCreateBag {
    onCreateBag {
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
export const onUpdateBag = /* GraphQL */ `
  subscription OnUpdateBag {
    onUpdateBag {
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
export const onDeleteBag = /* GraphQL */ `
  subscription OnDeleteBag {
    onDeleteBag {
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
export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent {
    onCreateContent {
      id
      foodID
      title
      bagID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContent = /* GraphQL */ `
  subscription OnUpdateContent {
    onUpdateContent {
      id
      foodID
      title
      bagID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContent = /* GraphQL */ `
  subscription OnDeleteContent {
    onDeleteContent {
      id
      foodID
      title
      bagID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFood = /* GraphQL */ `
  subscription OnCreateFood {
    onCreateFood {
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
export const onUpdateFood = /* GraphQL */ `
  subscription OnUpdateFood {
    onUpdateFood {
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
export const onDeleteFood = /* GraphQL */ `
  subscription OnDeleteFood {
    onDeleteFood {
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
export const onCreateNutrient = /* GraphQL */ `
  subscription OnCreateNutrient {
    onCreateNutrient {
      id
      tracked
      nutrientName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNutrient = /* GraphQL */ `
  subscription OnUpdateNutrient {
    onUpdateNutrient {
      id
      tracked
      nutrientName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNutrient = /* GraphQL */ `
  subscription OnDeleteNutrient {
    onDeleteNutrient {
      id
      tracked
      nutrientName
      createdAt
      updatedAt
    }
  }
`;
