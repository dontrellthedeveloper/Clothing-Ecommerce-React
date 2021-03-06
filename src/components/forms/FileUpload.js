import React from 'react';
import Resizer from 'react-image-file-resizer';
import axios from 'axios';
import {useSelector} from "react-redux";
import {Badge} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

const FileUpload = ({values, setLoading, setValues}) => {
    const {user} = useSelector((state) => ({...state}));

    const fileUploadAndResize = (e) => {
        // console.log(e.target.files);
        // resize
        let files = e.target.files;
        let allUploadedFiles = values.images;
        if(files) {
            setLoading(true);
            for (let i = 0; i < files.length; i++) {
                Resizer.imageFileResizer(files[i], 720, 720, 'JPEG', 100, 0, (uri) => {
                    axios.post(`${process.env.REACT_APP_API}/uploadimages`, {image: uri}, {
                        headers: {
                            authtoken: user ? user.token: ""
                        }
                    })
                        .then(res => {
                            console.log('IMAGE UPLOAD RES DATA', res);
                            setLoading(false);
                            allUploadedFiles.push(res.data);
                            setValues({...values, images: allUploadedFiles})
                        })
                        .catch(err => {
                            setLoading(false);
                            console.log('CLOUDINARY UPLOAD ERROR', err);
                        })
                }, "base64");
            }
        }
        // send back to server to upload to cloudinary
        // set url images[] in the parent component - ProductCreate
    };

    const handleImageRemove = (public_id) => {
      setLoading(true);
      // console.log('remove image' , public_id);
      axios.post(`${process.env.REACT_APP_API}/removeimage`, {public_id}, {
          headers: {
              authtoken: user ? user.token : ""
          }
      })
          .then((res) => {
              setLoading(false);
              const {images} = values;
              let filteredImages = images.filter((item) => {
                  return item.public_id !== public_id
              });
              setValues({...values, images: filteredImages});
          })
          .catch((err) => {
              console.log(err);
              setLoading(false);
          })
    };

 return (



     <div className="form-group">


             {values.images && values.images.map((image) => (
                 <Badge
                     key={image.public_id}
                     count="X"
                     onClick={() => handleImageRemove(image.public_id)}
                     style={{cursor: 'pointer'}}
                 >
                 <img

                    src={image.url}
                    alt=""
                    className="ml-3"
                    // width="120px"
                    // height="120px"
                    style={{   width: "15vw",
                        height: "15vw",
                        // objectFit: "cover"
                    }}
                    // size={20}
                 />
                 </Badge>
             ))}

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