import './Modal.css';

const Modal = (props) => {
    console.log(props);
    return (
        <>
            <div className='modal-card'>
                <h3>{props.title}</h3>
                <img src={props.img} />
                <p>{props.descr}</p>
                <p>{props.price}</p>
            </div>
        </>
    )
};

export default Modal;