import classes from "./TopSection.module.scss"

const TopSection = () => {
    const leaves = [
        {
            label: "Pendiing leave",
            count: 0
        },
        {
            label: "Approved leave",
            count: 0
        }
    ]

    const courses = [
        {
            label: "Purchase",
            count: 3
        },
        {
            label: "Completed",
            count: 0
        }
    ]

    const sessions = [
        {
            label: "Processing",
            count: 2
        },
        {
            label: "Accepted",
            count: 16
        }
    ]

    const tests = [
        {
            label: "Total test",
            count: 0
        }
    ]

    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <p>Apply for leave</p>
                {leaves.map((leave, index) => <div key={index} className={classes.info}><p>{leave.label}</p>
                    <span>{leave.count}</span></div>)}
            </div>
            <div className={classes.section}>
                <p>Purchase courses</p>
                {courses.map((course, index) => <div key={index} className={classes.info}><p>{course.label}</p>
                    <span>{course.count}</span></div>)}
            </div>
            <div className={classes.section}>
                <p>Join session</p>
                {sessions.map((session, index) => <div key={index} className={classes.info}><p>{session.label}</p>
                    <span>{session.count}</span></div>)}
            </div>
            <div className={classes.test}>
                <p>My Ttest</p>
                {tests.map((test, index) => <div key={index} className={classes.info}><p>{test.label}</p>
                    <span>{test.count}</span></div>)}
            </div>
        </div>
    )
}

export default TopSection
