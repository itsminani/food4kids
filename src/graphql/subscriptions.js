/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBag = /* GraphQL */ `
  subscription OnCreateBag {
    onCreateBag {
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
export const onUpdateBag = /* GraphQL */ `
  subscription OnUpdateBag {
    onUpdateBag {
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
export const onDeleteBag = /* GraphQL */ `
  subscription OnDeleteBag {
    onDeleteBag {
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
export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent {
    onCreateContent {
      id
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
      title
      bagID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFoods = /* GraphQL */ `
  subscription OnCreateFoods {
    onCreateFoods {
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
export const onUpdateFoods = /* GraphQL */ `
  subscription OnUpdateFoods {
    onUpdateFoods {
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
export const onDeleteFoods = /* GraphQL */ `
  subscription OnDeleteFoods {
    onDeleteFoods {
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
