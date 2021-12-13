import { onGetOne } from "../api/data/dataAPI";

const NEWS_DATA_URL="/news";

export default class DataService {
  handleUpload = (file) => {};
  handleDelete = (file) => {};
  handleGetNews = async (id) => {
    const result = await onGetOne(NEWS_DATA_URL,id);
    return result;
  };
}
