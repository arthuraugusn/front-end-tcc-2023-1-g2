import { Box, Modal, Rating, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { postAvaliacao } from "../../../../../api/client/avaliacao/postAvaliacaoMotorista";
import { ButtonAvaliarMotorista } from "./Button";
import CloseIcon from "@mui/icons-material/Close";

export const ModalAvaliacao = ({ props }) => {
  const [openCloseModal, setOpenCloseModal] = useState({
    status: false,
    value: "",
  });

  const [responseError, setResponseError] = useState({});

  useEffect(() => {
    if (openCloseModal.value !== "") {
      postAvaliacao(
        localStorage.getItem("id"),
        props.id,
        openCloseModal.value,
        setResponseError
      );
    }
  }, [openCloseModal.value]);

  useEffect(() => {
    if (responseError.status == 201) {
      if (openCloseModal.value !== "" && openCloseModal.value === "1") {
        Swal.fire({
          icon: "success",
          title: "Você avaliou o motorista com sucesso",
          text: `Sua nota para esse motorista foi de ${openCloseModal.value} estrela`,
        }).then((response) => {
          console.log(openCloseModal.value);
        });
      } else if (openCloseModal.value !== "") {
        Swal.fire({
          icon: "success",
          title: "Você avaliou o motorista com sucesso",
          text: `Sua nota para esse motorista foi de ${openCloseModal.value.replace(
            "7",
            ""
          )} estrelas`,
        }).then((response) => {
          console.log(openCloseModal.value);
        });
      }
    }

    console.log(openCloseModal.value);
    console.log(responseError);
  }, [responseError]);

  return (
    <>
      <ButtonAvaliarMotorista
        props={{
          message: "Avaliar Motorista",
          openCloseModal: openCloseModal,
          setOpenCloseModal: setOpenCloseModal,
        }}
      />
      <Modal
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
        open={openCloseModal.status}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            width: "40%",
            borderRadius: "10px",
            height: 500,
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
            justifyContent: "space-around",
            bgcolor: "var(--contract-infos-yellow)",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          <Box
            onClick={() => {
              setOpenCloseModal({
                status: false,
                value: "",
              });
            }}
          >
            <CloseIcon
              className="button-exit-close"
              sx={{
                fontSize: "5rem",
                cursor: "pointer",
              }}
              htmlColor="red"
            />
          </Box>

          <Typography
            sx={{
              fontSize: "2rem",
              textAlign: "center",
              color: "white",
              fontFamily: "Poppins",
            }}
          >
            Avalie o motorista
          </Typography>
          <Rating
            onChange={(e) => {
              setOpenCloseModal({
                status: false,
                value: e.target.value,
              });
            }}
            size="large"
          />
        </Box>
      </Modal>
    </>
  );
};
