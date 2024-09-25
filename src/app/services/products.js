import { api } from "./api";

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSortProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
        params: { type: "Сортовой" },
      }),
    }),
    getListProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
        params: { type: "Листовой" },
      }),
    }),
    getTrubProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
        params: { type: "Трубная" },
      }),
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    editProduct: builder.mutation({
      query: (product) => ({
        url: `/products/edit/${product.id}`,
        method: "PUT",
        body: product,
      }),
    }),
    removeProduct: builder.mutation({
      query: (id) => ({
        url: `/products/remove/${id}`,
        method: "DELETE",
        body: { id },
      }),
    }),
    addProduct: builder.mutation({
      query: (products) => ({
        url: `/products/add`,
        method: "POST",
        body: products,
      }),
    }),
  }),
});

export const {
  useGetSortProductsQuery,
  useGetListProductsQuery,
  useGetTrubProductsQuery,
  useGetAllProductsQuery,
  useGetProductQuery,
  useEditProductMutation,
  useRemoveProductMutation,
  useAddProductMutation,
} = productsApi;

export const {
  endpoints: {
    getSortProducts,
    getListProducts,
    getTrubProducts,
    getAllProducts,
    getProduct,
    editProduct,
    removeProduct,
    addProduct,
  },
} = productsApi;
