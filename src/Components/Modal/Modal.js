import './Modal.css';

const Modal = (props) => {
    const trigger = props.trigger2;
    const modalData = {...props.props}
    return (
        <>
            <dialog className='modal-card'>
                <p className='modal-title'>{modalData.title}</p>
                <img className='modal-img' src={modalData.target} />
                <p className='modal-card-info'>{modalData.info}</p>
                <p className='modal-card-price'>$<b>{modalData.price}</b>.00</p>
                <button type='button' className='close-btn' onClick={() => {trigger(false)}}>Cerrar</button>
            </dialog>
        </>
    )
};

export default Modal;