import { api } from "./api";

export const productionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRestorationProductions: builder.query({
      query: () => ({
        url: "/productions",
        method: "GET",
        params: { type: "Механическая" },
      }),
    }),
    getAllProductions: builder.query({
      query: () => ({
        url: "/productions",
        method: "GET",
      }),
    }),
    getProduction: builder.query({
      query: (id) => ({
        url: `/productions/${id}`,
        method: "GET",
      }),
    }),
    editProduction: builder.mutation({
      query: (production) => ({
        url: `/productions/edit/${production.id}`,
        method: "PUT",
        body: production,
      }),
    }),
    removeProduction: builder.mutation({
      query: (id) => ({
        url: `/productions/remove/${id}`,
        method: "DELETE",
        body: { id },
      }),
    }),
    addProduction: builder.mutation({
      query: (productions) => ({
        url: `/productions/add`,
        method: "POST",
        body: productions,
      }),
    }),
  }),
});

export const {
  useGetRestorationProductionsQuery,
  useGetAllProductionsQuery,
  useGetProductionQuery,
  useEditProductionMutation,
  useRemoveProductionMutation,
  useAddProductionMutation,
} = productionsApi;

export const {
  endpoints: {
    getRestorationProductions,
    getAllProductions,
    getProduction,
    editProduction,
    removeProduction,
    addProduction,
  },
} = productionsApi;
