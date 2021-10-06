import axios from "axios";
import { URL_BACKEND } from "../utils/url_base";

// obtener los items desde API

const itemsService = (jwt) => {
  const token = `JWT ${jwt}`;
  const headers = { Authorization: token };
  return new Promise((resolve, reject) => {
    axios
      .get(`${URL_BACKEND}/item`, { headers })
      .then(({ data }) => resolve(data))
      .catch(({ response }) => reject(response));
  });
};

export default itemsService;
