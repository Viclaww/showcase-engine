/*
 * Controller to create new Store
 */

import { createStore } from "../services/store.service";

export const createStoreRequest = async (req, res) => {
  try {
    const store = createStore(req.body);
  } catch (error) {}
};
