import React, { useRef } from "react";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  // FilePreviewContainer,
  // ImagePreview,
  // PreviewContainer,
  // PreviewList,
  // FileMetaData,
  // RemoveFileIcon,
  Fileuploadbtn
  
 
} from "./FileUpload.Styles";
// import DeleteIcon from '@mui/icons-material/Delete';

// const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

// const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  label,
  updateFilesCb,
  files,
  setFiles,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  // const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  // const removeFile = (fileName) => {
  //   delete files[fileName];
  //   setFiles({ ...files });
  //   callUpdateFilesCb({ ...files });
  // };

  return (
    <>
      <FileUploadContainer>
        <DragDropText>Drag and drop your file anywhere or Click to Upload(MAX SIZE-5MB)</DragDropText>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
           <Fileuploadbtn /> 
          <span style={{fontSize:"13px"}}> Upload {otherProps.multiple ? "files" : "a file"}</span>
        </UploadFileBtn>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </FileUploadContainer>
      {/* <FilePreviewContainer>
        <span>Preview</span>
        <PreviewList>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split("/")[0] === "image";
            return (
              <PreviewContainer key={fileName}>
                <div>
                  {isImageFile && (
                    <ImagePreview
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />
                  )}
                  <FileMetaData isImageFile={isImageFile}>
                    <span>{file.name}</span>
                    <aside>
                      <span>{convertBytesToKB(file.size)} kb</span>
                      <RemoveFileIcon
                        
                        onClick={() => removeFile(fileName)}
                      ><DeleteIcon/></RemoveFileIcon>
                    </aside>
                  </FileMetaData>
                </div>
              </PreviewContainer>
            );
          })}
        </PreviewList>
      </FilePreviewContainer> */}
    </>
  );
};

export default FileUpload;
