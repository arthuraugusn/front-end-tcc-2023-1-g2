import { uploadImage } from "../../../../../firebase/UploadProfilePictures/firebaseUploadProfilePictures";

export const FotoPerfilPage = ({ props }) => {
  return (
    <label className="form-picture-label">
      <p>Foto de perfil:</p>
      <input
        type="file"
        className="input-picture"
        onChange={async (e) => {
          var file = new FileReader();

          const product = {
            product: e.target.files[0],
            namePicture: e.target.files[0].name,
          };
          const url = await uploadImage(
            "drivers-profile-picture",
            product.product,
            product.namePicture
          );

          const photo = {
            photo: product.namePicture,
            url: url,
          };
          props.setStatusFoto({ t: true, img: photo.url });
        }}
      />
      <img className="img-preview" src={props.foto} alt="" />
    </label>
  );
};
