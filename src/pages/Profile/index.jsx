import ProfileInfo from "../../components/common/ProfileInfo/ProfileInfo"
import ProfileTabs from "../../components/common/ProfileTabs/ProfileTabs"
import classes from "./Profile.module.scss"

const Profile = () => {
    return <div className={classes.container}>
        <p className={classes.title}>Profile</p>
        <div className={classes["profile-info"]}>
            <ProfileInfo />
        </div>
        <ProfileTabs />
        <p className={classes.footer}>Matriye.io 2023, all rights reserved.</p>
    </div>
}

export default Profile
