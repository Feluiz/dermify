import classes from './CustomFooter.module.css';

const CustomFooter = () => {
    return (
        <div className={classes.CustomFooterContainer}>
            <p className={classes.FooterInfo}>Estos productos no son medicamentos.</p>
            <div className={classes.signature}>
                <p className={classes.signatureInfo}>Sitio creado por</p>
                <p className={classes.signatureName}>Devuiz</p>
            </div>
        </div>
    )
};

export default CustomFooter;