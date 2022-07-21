import {
  onGetOneAuthenticated,
  onGetAll,
  onGetAllAuthenticated,
  onSubmit,
  onUpdate,
  onDelete,
  onSubmitNoAuth,
  onApproved,
} from "../api/data/dataAPI";

export default class DataService {
  // NEWS
  async getAllNewsByAdmin() {
    return await onGetAllAuthenticated("/news");
  }

  async getNews(id) {
    return await onGetOneAuthenticated("/news", id);
  }

  async addNews(data) {
    return await onSubmit("/news", data);
  }

  async updateNews(id, data) {
    return await onUpdate("/news", id, data);
  }

  async deleteNews(id) {
    return await onDelete("/news", id);
  }

  async getAllAuthenticatedNews() {
    return await onGetAllAuthenticated("/news/authenticated");
  }

  async getGlobalNews() {
    return await onGetAll("/news?visibility=global");
  }

  async getAllNonApprovalNews() {
    return await onGetAllAuthenticated("/news?approval=false");
  }

  async getAllApprovalNews() {
    return await onGetAllAuthenticated("/news?approval=true");
  }

  async approveNewsByAdmin(id) {
    return await onApproved("/news/approval", id);
  }

  async getAllNewsByUser() {
    return await onGetAllAuthenticated("/news?filter=username");
  }

  // JOB
  async getAllJobs() {
    return await onGetAllAuthenticated("/job/all");
  }

  async getJob(id) {
    return await onGetOneAuthenticated("/job", id);
  }

  async addJob(data) {
    return await onSubmit("/job", data);
  }

  async updateJob(id, data) {
    return await onUpdate("/job", id, data);
  }

  async deleteJob(id) {
    return await onDelete("/job", id);
  }

  async approveJobByAdmin(id) {
    return await onApproved("/job/approval", id);
  }

  async getJobsByUser() {
    return await onGetAllAuthenticated("/job?filter=username");
  }

  // HOMEPAGE
  async getHomepageContent() {
    return await onGetAll("/content");
  }

  async updateHomepageContent(data) {
    return await onUpdate("/content", data);
  }

  async subscribeMail(data) {
    return await onSubmitNoAuth("/email/add", data);
  }

  // OTHER
  handleRequestTypeOther = async (data) => {
    console.log(data);
    const result = await onSubmit("/request?type=other", data);
    return result;
  };

  handleStatData = async () => {
    const result = await onGetAll("/stat");
    return result;
  };
}
