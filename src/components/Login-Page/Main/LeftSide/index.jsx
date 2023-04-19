import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { pink, yellow } from "@mui/material/colors";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginCliente } from "../../../../api/client/loginCliente";
import { loginDriver } from "../../../../api/driver/loginDriver";
import { ButtonEntrar } from "./Button";
import { InputContainerLogin } from "./Input";
import "./style.css";

export const LeftSide = ({ prop }) => {
  const [userDriverInfosLogin, setInfosLoginUserDriver] = useState([]);

  const navigate = useNavigate();

  const propsButtonEntrar = {
    key: "button-form",
    label: "Entrar",
  };

  const [colorMot, setColorMot] = useState("black");

  const [colorCli, setColorCli] = useState("black");

  const [valueRadioGroup, setValueRadioGroup] = useState("");

  const [user, setUser] = useState({ email: "", uid: "" });

  useEffect(() => {
    if (userDriverInfosLogin.code == 200) {
      navigate("/", { state: userDriverInfosLogin.data });
    }
  }, [userDriverInfosLogin]);

  return (
    <div className="left-side">
      <form className="register-form">
        <span className="form-title">Entre na sua conta</span>

        <div
          onChange={(e) => {
            setUser({ email: e.target.value, uid: user.uid });
          }}
        >
          <InputContainerLogin
            props={{
              classNameLabel: "placeholder",
              nameInput: "Email:",
              classNameInput: "input-login",
            }}
          />
        </div>
        <div
          onChange={(e) => {
            setUser({ email: user.email, uid: e.target.value });
          }}
        >
          <InputContainerLogin
            props={{
              classNameLabel: "placeholder",
              nameInput: "Senha:",
              classNameInput: "input-login",
            }}
          />
        </div>

        <div className="radio-group-login">
          <div className="container-password">
            <p>Esqueci minha senha</p>
          </div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                className="radio-group"
                onClick={() => {}}
              >
                <FormControlLabel
                  onClick={(e) => {
                    setColorMot("gray");
                    setColorCli("black");
                    setValueRadioGroup(e.target.value);
                  }}
                  value="motorista"
                  control={<Radio />}
                  label="Motorista"
                  sx={{
                    color: colorMot,
                    "& .MuiSvgIcon-root": {
                      color: colorMot,
                    },
                  }}
                />
                <FormControlLabel
                  onClick={(e) => {
                    setColorCli("gray");
                    setColorMot("black");
                    setValueRadioGroup(e.target.value);
                  }}
                  value="cliente"
                  control={<Radio />}
                  label="Cliente"
                  sx={{
                    color: colorCli,
                    "& .MuiSvgIcon-root": {
                      color: colorCli,
                    },
                  }}
                />
              </RadioGroup>
            </FormLabel>
          </FormControl>
        </div>

        <div
          onClick={() => {
            if (
              user.email != undefined ||
              user.email != "" ||
              user.uid != undefined ||
              user.uid != "" ||
              user != "{}"
            ) {
              if (valueRadioGroup == "motorista") {
                loginDriver(setInfosLoginUserDriver, user);
              } else if (valueRadioGroup == "cliente") {
                loginCliente(setInfosLoginUserDriver, user);
              }
            }
          }}
          className="container-button-entrar"
        >
          <ButtonEntrar props={propsButtonEntrar}></ButtonEntrar>
        </div>
      </form>
    </div>
  );
};
