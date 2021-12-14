import { onGetOne,onGetAll } from "../api/data/dataAPI";

const NEWS_DATA_URL="/news";
const JOB_DATA_URL="/job";

export default class DataService {
  handleUpload = (file) => {};
  handleDelete = (file) => {};
  handleGetNews = async (id) => {
    const result = await onGetOne(NEWS_DATA_URL,id);
    return result;
  };
  handleGetJob = async (id) => {
    const result = await onGetOne(JOB_DATA_URL,id);
    return result;
  };
  handleGetAllNews = async () => {
    const result = await onGetAll(NEWS_DATA_URL);
    return result;
  };
}

