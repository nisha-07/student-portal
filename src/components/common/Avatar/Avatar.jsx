import classes from "./Avatar.module.scss";

const Avatar = ({ src, altText, avatarClassName = "" }) => {
	return (
		<img
			src={src}
			alt={altText}
			className={`${classes.avatar} ${avatarClassName}`}
		/>
	)
}

export default Avatar
