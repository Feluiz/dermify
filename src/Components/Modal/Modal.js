import "./Modal.css";
import logoImg from "../../imgs/icons/favicon.png";

const Modal = (props) => {
  const trigger = props.trigger2;
  const modalData = { ...props.props };
  return (
    <>
      <dialog className="modal-card">
        <div className="card-header">
          <img src={logoImg} alt="dermify logo" className="logo-img" />
          <div className="header-titles">
            <p className="modal-title">{modalData.title}</p>
            <p className="modal-categoria">Jabones</p>
          </div>
        </div>
        <div className="img-section-container">
          <img className="modal-img" src={modalData.target} />
        </div>
        <p className="modal-card-info">{modalData.info}</p>
        <div className="modal-footer">
          <p className="modal-card-price">
            $<b>{modalData.price}</b>.00
          </p>
          <button
            type="button"
            className="close-btn"
            onClick={() => {
              trigger(false);
              props.setBackdrop.setBackdrop(false)
            }}
          >
            Cerrar
          </button>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
