import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CategoryGql = {
  __typename?: 'CategoryGQL';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProductInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isFavourite?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Int']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  subCategoryId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateSubCategoryInput = {
  categoryId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: CategoryGql;
  createProduct: ProductGql;
  createSubCategory: SubCategoryGql;
  deleteCategory: CategoryGql;
  deleteProduct: ProductGql;
  deleteSubCategory: SubCategoryGql;
  updateCategory: CategoryGql;
  updateProduct: ProductGql;
  updateSubCategory: SubCategoryGql;
};


export type MutationCreateCategoryArgs = {
  data: CreateCategoryInput;
};


export type MutationCreateProductArgs = {
  data: CreateProductInput;
};


export type MutationCreateSubCategoryArgs = {
  data: CreateSubCategoryInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSubCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: UpdateCategoryInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateProductArgs = {
  data: UpdateProductInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateSubCategoryArgs = {
  data: UpdateSubCategoryInput;
  id: Scalars['String']['input'];
};

export type ProductGql = {
  __typename?: 'ProductGQL';
  categoryId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isFavourite: Scalars['Boolean']['output'];
  price: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  stock: Scalars['Int']['output'];
  subCategoryId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<CategoryGql>;
  category?: Maybe<CategoryGql>;
  product?: Maybe<ProductGql>;
  productBySlug?: Maybe<ProductGql>;
  products: Array<ProductGql>;
  subcategories: Array<SubCategoryGql>;
  subcategory?: Maybe<SubCategoryGql>;
};


export type QueryCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QuerySubcategoryArgs = {
  id: Scalars['String']['input'];
};

export type SubCategoryGql = {
  __typename?: 'SubCategoryGQL';
  category?: Maybe<CategoryGql>;
  categoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type UpdateCategoryInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isFavourite?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  subCategoryId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubCategoryInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCategoryMutationVariables = Exact<{
  data: CreateCategoryInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'CategoryGQL', id: string, name: string, slug: string } };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: UpdateCategoryInput;
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'CategoryGQL', id: string, name: string, slug: string } };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: { __typename?: 'CategoryGQL', id: string, name: string } };

export type CreateProductMutationVariables = Exact<{
  data: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'ProductGQL', id: string, title: string, slug: string, description?: string | null, imageUrl?: string | null, price: number, stock: number, isFavourite: boolean, categoryId?: string | null, subCategoryId?: string | null } };

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: UpdateProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'ProductGQL', id: string, title: string, slug: string, description?: string | null, imageUrl?: string | null, price: number, stock: number, isFavourite: boolean, categoryId?: string | null, subCategoryId?: string | null } };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: { __typename?: 'ProductGQL', id: string, title: string } };

export type CreateSubCategoryMutationVariables = Exact<{
  data: CreateSubCategoryInput;
}>;


export type CreateSubCategoryMutation = { __typename?: 'Mutation', createSubCategory: { __typename?: 'SubCategoryGQL', id: string, name: string, slug: string, categoryId: string } };

export type UpdateSubCategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: UpdateSubCategoryInput;
}>;


export type UpdateSubCategoryMutation = { __typename?: 'Mutation', updateSubCategory: { __typename?: 'SubCategoryGQL', id: string, name: string, slug: string, categoryId: string } };

export type DeleteSubCategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteSubCategoryMutation = { __typename?: 'Mutation', deleteSubCategory: { __typename?: 'SubCategoryGQL', id: string, name: string, slug: string } };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'CategoryGQL', id: string, name: string, slug: string }> };

export type GetCategoryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCategoryQuery = { __typename?: 'Query', category?: { __typename?: 'CategoryGQL', id: string, name: string, slug: string } | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductGQL', id: string, title: string, slug: string, description?: string | null, imageUrl?: string | null, price: number, stock: number, isFavourite: boolean, categoryId?: string | null, subCategoryId?: string | null }> };

export type GetProductQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetProductQuery = { __typename?: 'Query', product?: { __typename?: 'ProductGQL', id: string, title: string, slug: string, description?: string | null, imageUrl?: string | null, price: number, stock: number, isFavourite: boolean, categoryId?: string | null, subCategoryId?: string | null } | null };

export type GetProductBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetProductBySlugQuery = { __typename?: 'Query', productBySlug?: { __typename?: 'ProductGQL', id: string, title: string, slug: string, description?: string | null, imageUrl?: string | null, price: number, stock: number, isFavourite: boolean, categoryId?: string | null, subCategoryId?: string | null } | null };

export type GetSubCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubCategoriesQuery = { __typename?: 'Query', subcategories: Array<{ __typename?: 'SubCategoryGQL', id: string, name: string, slug: string, categoryId: string, category?: { __typename?: 'CategoryGQL', id: string, name: string, slug: string } | null }> };

export type GetSubCategoryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetSubCategoryQuery = { __typename?: 'Query', subcategory?: { __typename?: 'SubCategoryGQL', id: string, name: string, slug: string, categoryId: string, category?: { __typename?: 'CategoryGQL', id: string, name: string, slug: string } | null } | null };

export type GetSubCategoriesByCategoryQueryVariables = Exact<{
  categoryId: Scalars['String']['input'];
}>;


export type GetSubCategoriesByCategoryQuery = { __typename?: 'Query', subcategories: Array<{ __typename?: 'SubCategoryGQL', id: string, name: string, slug: string, categoryId: string }> };


export const CreateCategoryDocument = gql`
    mutation CreateCategory($data: CreateCategoryInput!) {
  createCategory(data: $data) {
    id
    name
    slug
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: String!, $data: UpdateCategoryInput!) {
  updateCategory(id: $id, data: $data) {
    id
    name
    slug
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: String!) {
  deleteCategory(id: $id) {
    id
    name
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($data: CreateProductInput!) {
  createProduct(data: $data) {
    id
    title
    slug
    description
    imageUrl
    price
    stock
    isFavourite
    categoryId
    subCategoryId
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: String!, $data: UpdateProductInput!) {
  updateProduct(id: $id, data: $data) {
    id
    title
    slug
    description
    imageUrl
    price
    stock
    isFavourite
    categoryId
    subCategoryId
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: String!) {
  deleteProduct(id: $id) {
    id
    title
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const CreateSubCategoryDocument = gql`
    mutation CreateSubCategory($data: CreateSubCategoryInput!) {
  createSubCategory(data: $data) {
    id
    name
    slug
    categoryId
  }
}
    `;
export type CreateSubCategoryMutationFn = Apollo.MutationFunction<CreateSubCategoryMutation, CreateSubCategoryMutationVariables>;

/**
 * __useCreateSubCategoryMutation__
 *
 * To run a mutation, you first call `useCreateSubCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubCategoryMutation, { data, loading, error }] = useCreateSubCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSubCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubCategoryMutation, CreateSubCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSubCategoryMutation, CreateSubCategoryMutationVariables>(CreateSubCategoryDocument, options);
      }
export type CreateSubCategoryMutationHookResult = ReturnType<typeof useCreateSubCategoryMutation>;
export type CreateSubCategoryMutationResult = Apollo.MutationResult<CreateSubCategoryMutation>;
export type CreateSubCategoryMutationOptions = Apollo.BaseMutationOptions<CreateSubCategoryMutation, CreateSubCategoryMutationVariables>;
export const UpdateSubCategoryDocument = gql`
    mutation UpdateSubCategory($id: String!, $data: UpdateSubCategoryInput!) {
  updateSubCategory(id: $id, data: $data) {
    id
    name
    slug
    categoryId
  }
}
    `;
export type UpdateSubCategoryMutationFn = Apollo.MutationFunction<UpdateSubCategoryMutation, UpdateSubCategoryMutationVariables>;

/**
 * __useUpdateSubCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateSubCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubCategoryMutation, { data, loading, error }] = useUpdateSubCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateSubCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSubCategoryMutation, UpdateSubCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSubCategoryMutation, UpdateSubCategoryMutationVariables>(UpdateSubCategoryDocument, options);
      }
export type UpdateSubCategoryMutationHookResult = ReturnType<typeof useUpdateSubCategoryMutation>;
export type UpdateSubCategoryMutationResult = Apollo.MutationResult<UpdateSubCategoryMutation>;
export type UpdateSubCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateSubCategoryMutation, UpdateSubCategoryMutationVariables>;
export const DeleteSubCategoryDocument = gql`
    mutation DeleteSubCategory($id: String!) {
  deleteSubCategory(id: $id) {
    id
    name
    slug
  }
}
    `;
export type DeleteSubCategoryMutationFn = Apollo.MutationFunction<DeleteSubCategoryMutation, DeleteSubCategoryMutationVariables>;

/**
 * __useDeleteSubCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteSubCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubCategoryMutation, { data, loading, error }] = useDeleteSubCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSubCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSubCategoryMutation, DeleteSubCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSubCategoryMutation, DeleteSubCategoryMutationVariables>(DeleteSubCategoryDocument, options);
      }
export type DeleteSubCategoryMutationHookResult = ReturnType<typeof useDeleteSubCategoryMutation>;
export type DeleteSubCategoryMutationResult = Apollo.MutationResult<DeleteSubCategoryMutation>;
export type DeleteSubCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteSubCategoryMutation, DeleteSubCategoryMutationVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  categories {
    id
    name
    slug
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export function useGetCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetCategoriesSuspenseQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCategoryDocument = gql`
    query GetCategory($id: String!) {
  category(id: $id) {
    id
    name
    slug
  }
}
    `;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables> & ({ variables: GetCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
      }
export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
        }
export function useGetCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
        }
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
export type GetCategorySuspenseQueryHookResult = ReturnType<typeof useGetCategorySuspenseQuery>;
export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts {
  products {
    id
    title
    slug
    description
    imageUrl
    price
    stock
    isFavourite
    categoryId
    subCategoryId
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export function useGetProductsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsSuspenseQueryHookResult = ReturnType<typeof useGetProductsSuspenseQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductDocument = gql`
    query GetProduct($id: String!) {
  product(id: $id) {
    id
    title
    slug
    description
    imageUrl
    price
    stock
    isFavourite
    categoryId
    subCategoryId
  }
}
    `;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables> & ({ variables: GetProductQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export function useGetProductSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductSuspenseQueryHookResult = ReturnType<typeof useGetProductSuspenseQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const GetProductBySlugDocument = gql`
    query GetProductBySlug($slug: String!) {
  productBySlug(slug: $slug) {
    id
    title
    slug
    description
    imageUrl
    price
    stock
    isFavourite
    categoryId
    subCategoryId
  }
}
    `;

/**
 * __useGetProductBySlugQuery__
 *
 * To run a query within a React component, call `useGetProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProductBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetProductBySlugQuery, GetProductBySlugQueryVariables> & ({ variables: GetProductBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductBySlugQuery, GetProductBySlugQueryVariables>(GetProductBySlugDocument, options);
      }
export function useGetProductBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductBySlugQuery, GetProductBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductBySlugQuery, GetProductBySlugQueryVariables>(GetProductBySlugDocument, options);
        }
export function useGetProductBySlugSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProductBySlugQuery, GetProductBySlugQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductBySlugQuery, GetProductBySlugQueryVariables>(GetProductBySlugDocument, options);
        }
export type GetProductBySlugQueryHookResult = ReturnType<typeof useGetProductBySlugQuery>;
export type GetProductBySlugLazyQueryHookResult = ReturnType<typeof useGetProductBySlugLazyQuery>;
export type GetProductBySlugSuspenseQueryHookResult = ReturnType<typeof useGetProductBySlugSuspenseQuery>;
export type GetProductBySlugQueryResult = Apollo.QueryResult<GetProductBySlugQuery, GetProductBySlugQueryVariables>;
export const GetSubCategoriesDocument = gql`
    query GetSubCategories {
  subcategories {
    id
    name
    slug
    categoryId
    category {
      id
      name
      slug
    }
  }
}
    `;

/**
 * __useGetSubCategoriesQuery__
 *
 * To run a query within a React component, call `useGetSubCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSubCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetSubCategoriesQuery, GetSubCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubCategoriesQuery, GetSubCategoriesQueryVariables>(GetSubCategoriesDocument, options);
      }
export function useGetSubCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubCategoriesQuery, GetSubCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubCategoriesQuery, GetSubCategoriesQueryVariables>(GetSubCategoriesDocument, options);
        }
export function useGetSubCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSubCategoriesQuery, GetSubCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSubCategoriesQuery, GetSubCategoriesQueryVariables>(GetSubCategoriesDocument, options);
        }
export type GetSubCategoriesQueryHookResult = ReturnType<typeof useGetSubCategoriesQuery>;
export type GetSubCategoriesLazyQueryHookResult = ReturnType<typeof useGetSubCategoriesLazyQuery>;
export type GetSubCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetSubCategoriesSuspenseQuery>;
export type GetSubCategoriesQueryResult = Apollo.QueryResult<GetSubCategoriesQuery, GetSubCategoriesQueryVariables>;
export const GetSubCategoryDocument = gql`
    query GetSubCategory($id: String!) {
  subcategory(id: $id) {
    id
    name
    slug
    categoryId
    category {
      id
      name
      slug
    }
  }
}
    `;

/**
 * __useGetSubCategoryQuery__
 *
 * To run a query within a React component, call `useGetSubCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSubCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetSubCategoryQuery, GetSubCategoryQueryVariables> & ({ variables: GetSubCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubCategoryQuery, GetSubCategoryQueryVariables>(GetSubCategoryDocument, options);
      }
export function useGetSubCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubCategoryQuery, GetSubCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubCategoryQuery, GetSubCategoryQueryVariables>(GetSubCategoryDocument, options);
        }
export function useGetSubCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSubCategoryQuery, GetSubCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSubCategoryQuery, GetSubCategoryQueryVariables>(GetSubCategoryDocument, options);
        }
export type GetSubCategoryQueryHookResult = ReturnType<typeof useGetSubCategoryQuery>;
export type GetSubCategoryLazyQueryHookResult = ReturnType<typeof useGetSubCategoryLazyQuery>;
export type GetSubCategorySuspenseQueryHookResult = ReturnType<typeof useGetSubCategorySuspenseQuery>;
export type GetSubCategoryQueryResult = Apollo.QueryResult<GetSubCategoryQuery, GetSubCategoryQueryVariables>;
export const GetSubCategoriesByCategoryDocument = gql`
    query GetSubCategoriesByCategory($categoryId: String!) {
  subcategories {
    id
    name
    slug
    categoryId
  }
}
    `;

/**
 * __useGetSubCategoriesByCategoryQuery__
 *
 * To run a query within a React component, call `useGetSubCategoriesByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubCategoriesByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubCategoriesByCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useGetSubCategoriesByCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetSubCategoriesByCategoryQuery, GetSubCategoriesByCategoryQueryVariables> & ({ variables: GetSubCategoriesByCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubCategoriesByCategoryQuery, GetSubCategoriesByCategoryQueryVariables>(GetSubCategoriesByCategoryDocument, options);
      }
export function useGetSubCategoriesByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubCategoriesByCategoryQuery, GetSubCategoriesByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubCategoriesByCategoryQuery, GetSubCategoriesByCategoryQueryVariables>(GetSubCategoriesByCategoryDocument, options);
        }
export function useGetSubCategoriesByCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSubCategoriesByCategoryQuery, GetSubCategoriesByCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSubCategoriesByCategoryQuery, GetSubCategoriesByCategoryQueryVariables>(GetSubCategoriesByCategoryDocument, options);
        }
export type GetSubCategoriesByCategoryQueryHookResult = ReturnType<typeof useGetSubCategoriesByCategoryQuery>;
export type GetSubCategoriesByCategoryLazyQueryHookResult = ReturnType<typeof useGetSubCategoriesByCategoryLazyQuery>;
export type GetSubCategoriesByCategorySuspenseQueryHookResult = ReturnType<typeof useGetSubCategoriesByCategorySuspenseQuery>;
export type GetSubCategoriesByCategoryQueryResult = Apollo.QueryResult<GetSubCategoriesByCategoryQuery, GetSubCategoriesByCategoryQueryVariables>;