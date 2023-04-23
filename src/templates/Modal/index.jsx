import "./style.css";
import { ButtonModal } from "./Button";

export const Modal = () => {
    const propsButtonYes = {
        key: "yes",
        label: "Sim",
    };
    const propsButtonNo = {
        key: "no",
        label: "Não",
    };

    return (
        <div className="modal-container">
            <div className="modal-text">
                <span className="upper-span">Você realmente deseja</span>
                <span className="down-span">finalizar o contrato?</span>
            </div>
            <div className="buttons-container">
                <ButtonModal props={propsButtonYes} />
                <ButtonModal props={propsButtonNo} />
            </div>
        </div>
    );
};
