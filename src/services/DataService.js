import {
  onGetOne,
  onGetAll,
  onSubmit,
  onUpdate,
  onDelete,
} from "../api/data/dataAPI";

const NEWS_DATA_URL = "/news";
const JOB_DATA_URL = "/job";

export default class DataService {
  handleUpload = (file) => {};

  handleDelete = (file) => {};

  handleGetNews = async (id) => {
    const result = await onGetOne(NEWS_DATA_URL, id);
    return result;
  };

  handleGetJob = async (id) => {
    const result = await onGetOne(JOB_DATA_URL, id);
    return result;
  };

  handleGetAllNews = async () => {
    const result = await onGetAll(NEWS_DATA_URL);
    return result;
  };

  handleSubmitNews = async (data) => {
    const result = await onSubmit(NEWS_DATA_URL, data);
    return result;
  };

  handleSubmitJob = async (data) => {
    const result = await onSubmit(JOB_DATA_URL, data);
    return result;
  };

  handleUpdateNews = async (id, data) => {
    const result = await onUpdate(NEWS_DATA_URL, id, data);
    return result;
  };

  handleUpdateJob = async (id, data) => {
    const result = await onUpdate(JOB_DATA_URL, id, data);
    return result;
  };

  handleDeleteNews = async (id) => {
    const result = await onDelete(NEWS_DATA_URL, id);
    return result;
  };

  handleDeleteJob = async (id) => {
    const result = await onDelete(JOB_DATA_URL, id);
    return result;
  };
}
