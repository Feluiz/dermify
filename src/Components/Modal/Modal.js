import './Modal.css';

const Modal = (props) => {
    const trigger = props.trigger2;
    const modalData = {...props.props}
    return (
        <>
            <div className='modal-card'>
                <h3>{modalData.title}</h3>
                <img className='modal-img' src={modalData.target} />
                <p>{modalData.info}</p>
                <p>{modalData.price}</p>
                <button type='button' className='close-btn' onClick={() => {trigger(false)}}>Cerrar</button>
            </div>
        </>
    )
};

export default Modal;