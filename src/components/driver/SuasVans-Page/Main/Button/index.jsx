import { Button } from "@mui/material";

export const ButtonRemoverAdicionarVan = ({ props }) => {
  return (
    <Button
      sx={{
        height: 60,
        borderRadius: 3,
        fontWeight: 900,
        backgroundColor: "var(--button-contract-yellow)",
        color: "black",
        fontFamily: "Poppins",
        fontSize: "1.1rem",
      }}
      onClick={() => {
        props.setOpenCloseModal({
          status: true,
          value: props.openCloseModal.value,
        });
      }}
    >
      {props.message}
    </Button>
  );
};
