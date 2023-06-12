import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export enum Area {
  Depz = 'DEPZ',
  Savar = 'savar',
  Uttora = 'uttora'
}

export type Brand = {
  __typename?: 'Brand';
  brand_Id: Scalars['ID']['output'];
  brand_name?: Maybe<Scalars['String']['output']>;
  product: Array<Product>;
};

export type Customer = {
  __typename?: 'Customer';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  customer_DOB?: Maybe<Scalars['DateTime']['output']>;
  customer_Id: Scalars['ID']['output'];
  customer_area?: Maybe<Area>;
  customer_email: Scalars['String']['output'];
  customer_name: Scalars['String']['output'];
  customer_password: Scalars['String']['output'];
  customer_phone: Scalars['String']['output'];
  sales: Array<Sales>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Image = {
  __typename?: 'Image';
  image_Id: Scalars['ID']['output'];
  image_description?: Maybe<Scalars['String']['output']>;
  product_Id?: Maybe<Product>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['String']['output']>;
  createBrand?: Maybe<Brand>;
  createCategory?: Maybe<Product_Category>;
  createProduct?: Maybe<Product>;
  createStore?: Maybe<Store>;
  createSubCategory: Product_Subcategory;
  createSupplier?: Maybe<Supplier>;
  image_upload?: Maybe<Scalars['Boolean']['output']>;
  makePurchase?: Maybe<Purchase>;
  makeSale?: Maybe<Sales>;
  signIn?: Maybe<Customer>;
  signOut?: Maybe<Scalars['Boolean']['output']>;
  signUp?: Maybe<Customer>;
};


export type MutationCreateBrandArgs = {
  brand_name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCategoryArgs = {
  category_description?: InputMaybe<Scalars['String']['input']>;
  category_name: Scalars['String']['input'];
};


export type MutationCreateProductArgs = {
  product_brand_Id?: InputMaybe<Scalars['String']['input']>;
  product_category_Id: Scalars['String']['input'];
  product_description?: InputMaybe<Scalars['String']['input']>;
  product_name: Scalars['String']['input'];
  product_subcategory_Id: Scalars['String']['input'];
  product_usages?: InputMaybe<Scalars['String']['input']>;
  product_weight?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateStoreArgs = {
  store_area?: InputMaybe<Area>;
  store_email?: InputMaybe<Scalars['String']['input']>;
  store_name: Scalars['String']['input'];
};


export type MutationCreateSubCategoryArgs = {
  product_category_Id: Scalars['String']['input'];
  subcategory_description?: InputMaybe<Scalars['String']['input']>;
  subcategory_name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateSupplierArgs = {
  supplier_area?: InputMaybe<Area>;
  supplier_email?: InputMaybe<Scalars['String']['input']>;
  supplier_name: Scalars['String']['input'];
  supplier_phone: Scalars['String']['input'];
  supplier_store_name: Scalars['String']['input'];
};


export type MutationImage_UploadArgs = {
  file: Scalars['Upload']['input'];
  image_description?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationMakePurchaseArgs = {
  buyer_store_Id?: InputMaybe<Scalars['String']['input']>;
  product_expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  product_in_stock?: InputMaybe<Scalars['Int']['input']>;
  product_manufacturing_date?: InputMaybe<Scalars['DateTime']['input']>;
  product_moved_to_shelf?: InputMaybe<Scalars['Boolean']['input']>;
  product_net_purchase_price: Scalars['Float']['input'];
  product_net_purchase_quantity: Scalars['Int']['input'];
  product_price_per_pcs: Scalars['Float']['input'];
  product_purchase_date?: InputMaybe<Scalars['DateTime']['input']>;
  purchased_product_Id?: InputMaybe<Scalars['String']['input']>;
  seller_Id?: InputMaybe<Scalars['String']['input']>;
  soldOut?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationMakeSaleArgs = {
  canceled_order?: InputMaybe<Scalars['Boolean']['input']>;
  customer_Id: Scalars['String']['input'];
  paid_in_cash: PayMethod;
  product_Id: Scalars['String']['input'];
  product_pcs: Scalars['Int']['input'];
  refunded_order?: InputMaybe<Scalars['Boolean']['input']>;
  sale_net_price: Scalars['Float']['input'];
};


export type MutationSignInArgs = {
  customer_email?: InputMaybe<Scalars['String']['input']>;
  customer_password: Scalars['String']['input'];
  customer_phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSignUpArgs = {
  customer_DOB?: InputMaybe<Scalars['DateTime']['input']>;
  customer_area?: InputMaybe<Area>;
  customer_email?: InputMaybe<Scalars['String']['input']>;
  customer_name: Scalars['String']['input'];
  customer_password: Scalars['String']['input'];
  customer_phone?: InputMaybe<Scalars['String']['input']>;
};

export enum PayMethod {
  Bkash = 'Bkash',
  Cash = 'Cash',
  CreditCard = 'CreditCard'
}

export type Product = {
  __typename?: 'Product';
  image: Array<Image>;
  product_Id: Scalars['ID']['output'];
  product_brand_Id?: Maybe<Scalars['String']['output']>;
  product_category_Id: Scalars['String']['output'];
  product_description?: Maybe<Scalars['String']['output']>;
  product_name: Scalars['String']['output'];
  product_subcategory_Id: Scalars['String']['output'];
  product_usages?: Maybe<Scalars['String']['output']>;
  product_weight?: Maybe<Scalars['Int']['output']>;
  purchase: Array<Purchase>;
  sales: Array<Sales>;
};

export type Product_Category = {
  __typename?: 'Product_category';
  category_Id: Scalars['ID']['output'];
  category_description?: Maybe<Scalars['String']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  product: Array<Product>;
  subcategory: Array<Product_Subcategory>;
};

export type Product_Subcategory = {
  __typename?: 'Product_subcategory';
  product: Array<Product>;
  product_category_Id: Scalars['String']['output'];
  subcategory_Id: Scalars['ID']['output'];
  subcategory_description?: Maybe<Scalars['String']['output']>;
  subcategory_name?: Maybe<Scalars['String']['output']>;
};

export type Purchase = {
  __typename?: 'Purchase';
  buyer_store_Id?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  product_expiry_date?: Maybe<Scalars['DateTime']['output']>;
  product_in_stock?: Maybe<Scalars['Int']['output']>;
  product_manufacturing_date?: Maybe<Scalars['DateTime']['output']>;
  product_moved_to_shelf?: Maybe<Scalars['Boolean']['output']>;
  product_net_purchase_price: Scalars['Float']['output'];
  product_net_purchase_quantity: Scalars['Int']['output'];
  product_price_per_pcs: Scalars['Float']['output'];
  product_purchase_Id: Scalars['ID']['output'];
  product_purchase_date?: Maybe<Scalars['DateTime']['output']>;
  purchased_product_Id?: Maybe<Scalars['String']['output']>;
  seller_Id?: Maybe<Scalars['String']['output']>;
  soldOut?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']['output']>;
  allCustomer: Array<Customer>;
  categories?: Maybe<Array<Maybe<Product_Category>>>;
  category?: Maybe<Product_Category>;
  getBrandById?: Maybe<Brand>;
  getBrandByName: Array<Brand>;
  getBrands: Array<Brand>;
  getCustomer: Customer;
  getImage?: Maybe<Array<Maybe<Image>>>;
  getProductByCategoryId: Array<Product>;
  getProductById?: Maybe<Product>;
  getProductByName: Array<Product>;
  getProductBySubCategoryId: Array<Product>;
  products: Array<Product>;
  purchase?: Maybe<Purchase>;
  purchases: Array<Purchase>;
  sale?: Maybe<Sales>;
  sales: Array<Sales>;
  store?: Maybe<Store>;
  stores: Array<Store>;
  subcategories: Array<Product_Subcategory>;
  subcategory?: Maybe<Product_Subcategory>;
  supplier?: Maybe<Supplier>;
  suppliers: Array<Supplier>;
};


export type QueryCategoryArgs = {
  category_Id: Scalars['String']['input'];
};


export type QueryGetBrandByIdArgs = {
  brand_name: Scalars['String']['input'];
};


export type QueryGetBrandByNameArgs = {
  brand_Id: Scalars['String']['input'];
};


export type QueryGetCustomerArgs = {
  customer_Id: Scalars['String']['input'];
};


export type QueryGetImageArgs = {
  product_Id: Scalars['String']['input'];
};


export type QueryGetProductByCategoryIdArgs = {
  product_category_Id: Scalars['String']['input'];
};


export type QueryGetProductByIdArgs = {
  product_Id: Scalars['String']['input'];
};


export type QueryGetProductByNameArgs = {
  product_name: Scalars['String']['input'];
};


export type QueryGetProductBySubCategoryIdArgs = {
  product_subcategory_Id: Scalars['String']['input'];
};


export type QueryPurchaseArgs = {
  product_purchase_Id: Scalars['String']['input'];
};


export type QuerySaleArgs = {
  sale_Id: Scalars['String']['input'];
};


export type QueryStoreArgs = {
  store_Id: Scalars['String']['input'];
};


export type QuerySubcategoryArgs = {
  subcategory_Id: Scalars['String']['input'];
};


export type QuerySupplierArgs = {
  supplier_Id: Scalars['String']['input'];
};

export type Sales = {
  __typename?: 'Sales';
  canceled_order?: Maybe<Scalars['Boolean']['output']>;
  customer_Id: Scalars['String']['output'];
  paid_in_cash: PayMethod;
  product_Id: Scalars['String']['output'];
  product_pcs: Scalars['Int']['output'];
  refunded_order?: Maybe<Scalars['Boolean']['output']>;
  sale_Id: Scalars['ID']['output'];
  sale_date: Scalars['DateTime']['output'];
  sale_net_price: Scalars['Float']['output'];
};

export type Store = {
  __typename?: 'Store';
  Purchase: Array<Purchase>;
  store_Id: Scalars['ID']['output'];
  store_area?: Maybe<Area>;
  store_code?: Maybe<Scalars['Int']['output']>;
  store_email?: Maybe<Scalars['String']['output']>;
  store_name: Scalars['String']['output'];
};

export type Supplier = {
  __typename?: 'Supplier';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  purchase: Array<Purchase>;
  supplier_Id: Scalars['ID']['output'];
  supplier_area?: Maybe<Area>;
  supplier_email?: Maybe<Scalars['String']['output']>;
  supplier_name: Scalars['String']['output'];
  supplier_phone: Scalars['String']['output'];
  supplier_store_name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GetCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersQuery = { __typename?: 'Query', allCustomer: Array<{ __typename?: 'Customer', customer_Id: string, customer_name: string }> };

export type Image_UploadMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
  productId: Scalars['String']['input'];
  imageDescription?: InputMaybe<Scalars['String']['input']>;
}>;


export type Image_UploadMutation = { __typename?: 'Mutation', image_upload?: boolean | null };


export const GetCustomersDocument = gql`
    query getCustomers {
  allCustomer {
    customer_Id
    customer_name
  }
}
    `;
export const Image_UploadDocument = gql`
    mutation image_upload($file: Upload!, $productId: String!, $imageDescription: String) {
  image_upload(
    file: $file
    product_Id: $productId
    image_description: $imageDescription
  )
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCustomers(variables?: GetCustomersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCustomersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCustomersQuery>(GetCustomersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCustomers', 'query');
    },
    image_upload(variables: Image_UploadMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Image_UploadMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Image_UploadMutation>(Image_UploadDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'image_upload', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;