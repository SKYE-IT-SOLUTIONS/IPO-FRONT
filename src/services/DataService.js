import {
  onGetOne,
  onGetAll,
  onSubmit,
  onUpdate,
  onDelete,
} from "../api/data/dataAPI";

const NEWS_DATA_URL = "/news";
const GLOBAL_NEWS_DATA_URL = "news/global";
const JOB_DATA_URL = "/job";
const CONTACT_US ='/contactUs'

export default class DataService {
  //get news and job data
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
  
  handleGetGlobalNews = async () => {
    const result = await onGetAll(GLOBAL_NEWS_DATA_URL);
    return result;
  };

  //handle job and news submit
  handleSubmitNews = async (data) => {
    const result = await onSubmit(NEWS_DATA_URL, data);
    return result;
  };

  handleSubmitJob = async (data) => {
    const result = await onSubmit(JOB_DATA_URL, data);
    return result;
  };

  //handle job and news update
  handleUpdateNews = async (id, data) => {
    const result = await onUpdate(NEWS_DATA_URL, id, data);
    return result;
  };

  handleUpdateJob = async (id, data) => {
    const result = await onUpdate(JOB_DATA_URL, id, data);
    return result;
  };

  //handle job and news delete
  handleDeleteNews = async (id) => {
    const result = await onDelete(NEWS_DATA_URL, id);
    return result;
  };

  handleDeleteJob = async (id) => {
    const result = await onDelete(JOB_DATA_URL, id);
    return result;
  };

  //handle get contact us details
  handleGetContactDetails = async () => {
    const result = await onGetOne(CONTACT_US);
    return result;
  };

  //handle update contact us details
  handleUpdateContactDetails = async (data) => {
    const result = await onUpdate(CONTACT_US, data);
    return result;
  };
}
