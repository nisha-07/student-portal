import classes from "./Avatar.module.scss"

const Avatar = ({ src, altText }) => {
	return <img src={src} alt={altText} className={classes.avatar} />
}

export default Avatar
