import React, {useEffect, useState} from 'react';
import '../assets/css/avatar.scss';
import {FaUserEdit} from 'react-icons/fa';
import console from 'console';

const Avatar = (props: any) => {
    const [image, setImage] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);

    const onFileUpload = () => {
        let fileUpload: HTMLElement = document.getElementsByClassName("file-upload")[0] as HTMLElement;
        fileUpload.click();
    }

    useEffect(() => {
        setImage(props.value)
    }, []);

    useEffect(() => {
        setImage(props.value)
    }, [image]);

    const readURL = (e: any) => {
        let input = e.target;
        if (input.files && input.files[0]) {
            toBase64(input.files[0])
                .then((value: any) => {
                    props.onClick(value);
                    setImage(value)
                });
        }
    }

   
// convert base 64
    const toBase64 = (file: any) => new Promise((resolve, reject) => {
        const reader = new FileReader();
       
        let fileSize = file.size / (1024 * 1024);
        
        // validate
          switch(file.type){
            case 'image/png':
              break;
            case 'image/jpg':
            break;
            case 'image/jpeg':
              break;
            default:
             setIsValid(false);
             return;
          }
          
        if (fileSize > 1) {
            setIsValid(false);
            return;
        }else {
            setIsValid(true);
        }
        
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    return (
        <>
            <div key={image} className="avatar-wrapper">
                <img className="profile-pic" src={image}/>
                <div className="upload-button" onClick={onFileUpload}>
                    <i className="fa fa-arrow-circle-up" aria-hidden="true"><FaUserEdit/></i>
                </div>
                <input className="file-upload" type="file" accept="image/*" onChange={(e) => readURL(e)}/>
            </div>
            <p hidden={isValid} className="alert-file-validation">File is not valid !</p>
        </>
    )
}

export default Avatar;
