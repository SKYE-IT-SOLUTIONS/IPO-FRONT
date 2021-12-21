import { onFileUpload,onFileDelete } from "../api/file/fileAPI"

import { FILE_UPLOAD_URL } from "../config/urls";

export default class FileService {
    handleCreate = async (file) => {
        const result = await onFileUpload(FILE_UPLOAD_URL,file);
        return result;
    }
    handleDelete = (FILE_URL) => {
        const result = onFileDelete(FILE_URL);
        return result;
    }
}