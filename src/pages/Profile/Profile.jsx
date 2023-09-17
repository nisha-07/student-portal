import ProfileInfo from "../../components/common/ProfileInfo/ProfileInfo"
import classes from "./Profile.module.scss"

const Profile = () => {
    return <div className={classes.container}>
        <p className={classes.title}>Profile</p>
        <div className={classes["profile-info"]}>
            <ProfileInfo />
        </div>
    </div>
}

export default Profile
