import EmergencyContact from "./EmergencyContact"
import PersnoalInfo from "./PersonalInfo"
import classes from "./MyProfile.module.scss"
import BankInfo from "./BankInfo"
import FamilyInfo from "./FamilyInfo"

const MyProfile = () => {
    return (
        <>
            <div className={classes.profile}>
                <PersnoalInfo />
                <EmergencyContact />
            </div>
            <div className={classes.profile}>
                <BankInfo />
                <FamilyInfo />
            </div>
        </>
    )
}

export default MyProfile
