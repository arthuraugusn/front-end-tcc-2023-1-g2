import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ModalPadrao = ({ props }) => {
  return (
    <Modal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
      open={props.openCloseModal.status}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          display: "flex",
          width: "40%",
          borderRadius: "10px",
          height: 300,
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "var(--main-yellow)",
          boxShadow: 24,
          pt: 2,
          px: 4,
          pb: 3,
        }}
      >
        <div className="modal-teste">
          <Typography
            sx={{
              fontSize: "2rem",
              textAlign: "center",
              color: "white",
              fontFamily: "Poppins",
            }}
          >
            {props.message}
          </Typography>
          <div>
            <Button
              sx={{
                width: 100,
                fontWeight: 900,
                backgroundColor: "var(--button-contract-yellow)",
                color: "black",
                fontFamily: "Poppins",
                fontSize: "1.1rem",
              }}
              defaultValue="Sim"
              onClick={(e) => {
                props.setOpenCloseModal({
                  status: false,
                  value: e.target.value,
                });
              }}
              value={"Sim"}
            >
              Sim
            </Button>
            <Button
              sx={{
                width: 100,
                fontWeight: 900,
                backgroundColor: "var(--button-contract-yellow)",
                color: "black",
                fontFamily: "Poppins",
                fontSize: "1.1rem",
              }}
              onClick={(e) => {
                props.setOpenCloseModal({
                  status: false,
                  value: e.target.value,
                });
              }}
              value={"Não"}
            >
              Não
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
