import React from 'react';

const FileUpload = () => {
    const fileUploadAndResize = (e) => {
        // console.log(e.target.files);
        // resize
        // send back to server to upload to cloudinary
        // set url images[] in the parent component - ProductCreate
    };

 return (
     <div className="form-group">
         <div className="row">
             <label className="btn btn-secondary" style={{margin: "10px auto 20px auto", width: '48%', textAlignLast: "center"}}>Choose Images
             <input
                 type="file"
                 multiple
                 hidden
                 accept="images/*"
                 className="form-control"
                 onChange={fileUploadAndResize}

             />
             </label>
         </div>
     </div>
 )
};

export default FileUpload;