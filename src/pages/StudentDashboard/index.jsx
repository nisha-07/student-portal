import Project from "./Project/Project"
import classes from "./StudentDashboard.module.scss"
import TopSection from "./TopSection/TopSection"

const StudentDashboard = () => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>Hi, Welcome Matriye Software</p>
            <p className={classes.subtitle}>Dashboard</p>
            <TopSection />
            <Project />
            <p className={classes.footer}>Matriye.io 2023, all rights reserved.</p>
        </div>
    )
}

export default StudentDashboard
