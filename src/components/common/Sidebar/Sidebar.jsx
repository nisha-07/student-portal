import { useState } from "react";
import { Link } from "react-router-dom";
import avartIcon from "../../../assets/icons/avatar.png";
import avatarLogo from "../../../assets/icons/avatarLogo.png";
import emailLogo from "../../../assets/icons/email.png";
import settingsLogo from "../../../assets/icons/settings.svg";
import signoutLogo from "../../../assets/icons/signout.png";
import { sidebarNav } from "../../../constants";
import Avatar from "../Avatar/Avatar";
import IconImage from "../IconImage/IconImage";
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
	const [activeNavItem, setActiveNavItem] = useState(null);

	// Set the active navigation tab
	const handleNavItemClick = (index) => {
		setActiveNavItem(index);
	};

	// TODO: Add navigation links here
	const sidebarNavIcons = [
		{
			src: emailLogo,
			alt: "email",
			link: "",
		},
		{
			src: avatarLogo,
			alt: "avatar",
			link: "/profile",
		},
		{
			src: settingsLogo,
			alt: "settings",
			link: "",
		},
		{
			src: signoutLogo,
			alt: "signout",
			link: "",
		},
	];

	return (
		<div className={classes.sidebar}>
			<div className={classes["top-section"]}>
				<Avatar
					{...{
						src: avartIcon,
						altText: "avatar",
						avatarClassName: classes.avatar,
					}}
				/>
				<p className={classes.name}>Nisha Sataki</p>
				<p>Student</p>
				<div className={classes["profile-links"]}>
					{sidebarNavIcons.map((icon, index) => (
						<Link key={index} to={icon.link}>
							<IconImage {...{ src: icon.src, altText: icon.alt }} />
						</Link>
					))}
				</div>
			</div>
			<div className={classes["bottom-section"]}>
				{sidebarNav.map((nav, index) => (
					<Link
						key={index}
						to={nav.link}
						className={`${classes["nav-item"]} ${
							index === activeNavItem ? classes.active : ""
						}`}
						onClick={() => handleNavItemClick(index)}
					>
						{nav.label}
					</Link>
				))}
			</div>
		</div>
	)
}

export default Sidebar
