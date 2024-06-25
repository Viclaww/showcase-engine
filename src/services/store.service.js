import Store from "../models/store.model";

export const createStore = async (body) => {
  const store = await Store.create(body);
  return store;
};
