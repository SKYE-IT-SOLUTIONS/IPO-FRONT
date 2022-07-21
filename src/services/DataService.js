import {
  onGetOne,
  onGetAll,
  onSubmit,
  onUpdate,
  onDelete,
  onSubmitNoAuth,
  onApproved,
} from "../api/data/dataAPI";

const NEWS_DATA_URL = "/news";
const GLOBAL_NEWS_DATA_URL = "news?visibility=global";
const NON_APPROVAL_NEWS_DATA_URL = "news?approval=false";
const APPROVAL_NEWS_DATA_URL = "news/approval";
const JOB_DATA_URL = "/job";
const CONTACT_US ='/content'
const SUBSCRIBE_URL ='/email/add'
const REQUEST_OTHER_URL ='request?type=other'
const GET_STAT_DATA ='/stat'
const NEWS_DATA_USER_URL ="news/user";
const JOB_DATA_USER_URL ="jobs/user";


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

  handleGetAllNewsUser = async () => {
    const result = await onGetAll(NEWS_DATA_USER_URL);
    return result;
  };

  handleGetAllJobsUser = async () => {
    const result = await onGetAll(JOB_DATA_USER_URL);
    return result;
  }

  handleGetAllJobs = async () => {
    const result = await onGetAll(JOB_DATA_URL);
    return result;
  };
  
  handleGetGlobalNews = async () => {
    const result = await onGetAll(GLOBAL_NEWS_DATA_URL);
    return result;
  };

  handleNonApprovedNews = async () => {
    const result = await onGetAll(NON_APPROVAL_NEWS_DATA_URL);
    return result;
  };

  handleApprovedNews = async (id) => {
    const result = await onApproved(APPROVAL_NEWS_DATA_URL,id);
    return result;
  }

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
    const result = await onGetAll(CONTACT_US);
    return result;
  };

  //handle update contact us details
  handleUpdateContactDetails = async (data) => {
    const result = await onUpdate(CONTACT_US, data);
    return result;
  };

  //handle subscribe email
  handleSubscription = async (data) => {
    const result = await onSubmitNoAuth(SUBSCRIBE_URL, data);
    return result;
  }

  //requests from outside
  handleRequestTypeOther = async (data) => {
    console.log(data)
    const result = await onSubmit(REQUEST_OTHER_URL, data);
    return result;
  }
  //dashboard data
  handleStatData = async () => {
    const result = await onGetAll(GET_STAT_DATA);
    return result;
  }
}
