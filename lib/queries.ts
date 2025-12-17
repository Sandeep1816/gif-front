import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      slug
      description
      price
      stock
      isFavourite
      categoryId
      subCategoryId
      images {
        id
        url
        isPrimary
        order
      }
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: String!) {
    productBySlug(slug: $slug) {
      id
      title
      slug
      description
      price
      stock
      isFavourite
      categoryId
      subCategoryId
      images {
        id
        url
        isPrimary
        order
      }
    }
  }
`;
