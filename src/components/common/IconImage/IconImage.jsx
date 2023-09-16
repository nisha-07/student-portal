import classes from './IconImage.module.scss';

const IconImage = ({ src, altText }) => {
    return (
        <img src={src} alt={altText} className={classes.icon} />
    )
}

export default IconImage
