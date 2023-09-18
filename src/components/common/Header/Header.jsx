import { Link } from "react-router-dom"
import avatarIcon from "../../../assets/icons/avatar.png"
import earthIcon from "../../../assets/icons/earth.svg"
import notificationIcon from "../../../assets/icons/notification.svg"
import settingsICon from "../../../assets/icons/settingsHeader.png"
import Avatar from "../Avatar/Avatar"
import Button from "../Button/Button"
import IconImage from "../IconImage/IconImage"
import classes from "./Header.module.scss"


const Header = () => {
    const icons = [
        {
            src: earthIcon,
            altText: 'earth',
            to: '/',
        },
        {
            src: notificationIcon,
            altText: 'notification',
            to: '/',
        },
        {
            src: settingsICon,
            altText: 'settings',
            to: '/',
        },
    ]

    return (
        <div className={classes.header}>
            <Link to="/" className={classes.logo}>matriye.io</Link>
            <div className={classes["right-section"]}>
                {icons.map((icon, index) => (
                    <Link key={index} to={icon.link} className={classes.link}>
                        <IconImage {...{ src: icon.src, altText: icon.altText }} />
                    </Link>
                ))
                }
                <Link to='/' className={classes.link}>
                    <Avatar {...{ src: avatarIcon, altText: "avatar" }} />
                </Link>
                {/* //TODO: Perform logout functionality */}
                <Button {...{ label: "logout", handleClick: () => alert("Logout!!") }} />
            </div>
        </div>
    )
}

export default Header
