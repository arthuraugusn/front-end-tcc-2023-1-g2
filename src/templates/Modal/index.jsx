import "./style.css";
import { ButtonModal } from "./Button";
import {deleteContractUser } from "../../api/client/deleteUserContract"

export const Modal = ({toggleModal, }) => {

    const propsButtonYes = {
        key: "yes",
        label: "Sim",
        onClick: () => {
            deleteContractUser();
        }

    };
    const propsButtonNo = {
        key: "no",
        label: "Não",
        onClick: () => {
            toggleModal();
        }
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
