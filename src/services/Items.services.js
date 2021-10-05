import axios from "axios";
import { URL_BACKEND } from "../utils/url_base";

const itemsService = (formBody) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${URL_BACKEND}/item`, formBody)
      .then((response) => {
        const { data } = response;
        console.log('api list /api/v1/item data = ', data)
        resolve(data);
      })
      .catch(({ response }) => {
        reject(response);
      });
  });
};

export default itemsService;
