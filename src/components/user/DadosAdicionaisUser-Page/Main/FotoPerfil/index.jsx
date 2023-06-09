import { useState } from "react";
import "./style.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useEffect } from "react";
import { uploadImage } from "../../../../../firebase/UploadProfilePictures/firebaseUploadProfilePictures";

export const FotoPerfilRegistro = ({ props }) => {
  const [card, setCardFile] = useState();
  const [classImg, setClassImg] = useState("none");
  const [classIcon, setClassIcon] = useState("true");
  const [imgFirebase, setImageFirebase] = useState("");

  return (
    <div className="container-foto-perfil">
      <label className="form-picture-label">
        <p>Foto de Perfil</p>
        <input
          onChange={async (e) => {
            await OnChangeFunction(
              e,
              setCardFile,
              setClassImg,
              setClassIcon,
              setImageFirebase,
              props.folder,
              props.setUrlImg
            );
          }}
          className="input-picture"
          type="file"
        />
        <div className={`${classIcon} container-icon-picture`}>
          <CameraAltIcon
            sx={{
              color: "black",
              fontSize: 230,
            }}
            className={classIcon}
          />
        </div>
        <img className={`img-preview ${classImg}`} src={card} alt="teste" />
      </label>
    </div>
  );
};

export const OnChangeFunction = async (
  e,
  setCardFile,
  setClassForImage,
  setClassForIcon,
  setImageFirebase,
  nameDirectFolder,
  setUrlImg
) => {
  var file = new FileReader();

  const previewPhoto = document.querySelector(".img-preview");

  file.onload = (e) => {
    setClassForIcon("none");
    previewPhoto.src = e.target.result;
  };

  const product = e.target.files[0];

  const namePicture = e.target.files[0].name;

  setClassForImage("true");
  setImageFirebase(namePicture);
  setCardFile(file.readAsDataURL(product));

  const urlImage = await uploadImage(nameDirectFolder, product, namePicture);

  const photo = {
    photo: namePicture,
    url: urlImage,
  };

  previewPhoto.id = photo.url;

  setUrlImg({ img: photo.url, statusImg: true });
};
