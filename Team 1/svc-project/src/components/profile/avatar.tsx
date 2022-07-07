import React, { useEffect, useState } from 'react';
import '../../assets/css/profileCss/avatar.scss';
import { FaUserEdit } from 'react-icons/fa';

const Avatar = (props: { value: React.SetStateAction<string>; onClick: (arg0: any) => void }) => {
  const [image, setImage] = useState<string>('');
  const [isValid, setIsValid] = useState<string>('');
  const onFileUpload = () => {
    let fileUpload: HTMLElement = document.getElementsByClassName('file-upload')[0] as HTMLElement;
    fileUpload.click();
  };
  useEffect(() => {
    setImage(props.value);
  });
  const readURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target;
    if (input.files && input.files[0]) {
      toBase64(input.files[0]).then((value: any) => {
        props.onClick(value);
        setImage(value);
      });
    }
  };
  // convert base 64
  const fileTypeImage = ['image/png', 'image/jpg', 'image/jpeg'];
  const toBase64 = (file: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      // validate
      if (fileTypeImage.includes(file.type)) {
        setIsValid('');
      } else {
        setIsValid('format:png,jpg,jpeg');
        return;
      }
      let fileSize = file.size / (1024 * 1024);
      if (fileSize > 1) {
        setIsValid('Maximum file size < 1 MB');
        return;
      } else {
        setIsValid('');
      }
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <>
      <div key={image} className="avatar-wrapper">
        <img className="profile-pic" src={image} alt="" />
        <div className="upload-button" onClick={onFileUpload}>
          <i className="fa fa-arrow-circle-up" aria-hidden="true">
            <FaUserEdit />
          </i>
        </div>
        <input className="file-upload" type="file" accept="image/*" onChange={(e) => readURL(e)} />
      </div>
      <p className="alert-file-validation">{isValid}</p>
    </>
  );
};

export default Avatar;
