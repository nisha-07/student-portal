/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import classes from "./Project.module.scss";
import { useEffect, useState } from "react";

const Project = () => {
    const [projStatus, setProjStatus] = useState("");
    const [statusClasses, setstatusClasses] = useState("");

    const projectStatus = [
        {
            project: "Welcome Letter",
            status: "Completed",
        },
        {
            project: "Invoice",
            status: "Pending",
        },
        {
            project: "Invoice",
            status: "Canceled",
        },
        {
            project: "Certificate",
            status: "On-going",
        },
        {
            project: "Certificate",
            status: "Completed",
        },
    ];

    // Hook to decide the color status of project & task
    useEffect(() => {
        setstatusClasses(classes[projStatus.toLowerCase()]);
    }, [projStatus]);

    return (
        <div className={classes.container}>
            <div className={classes["left-section"]}>
                <span className={classes.title}>Project Budget</span>
                <p className={classes.subtitle}>
                    The project budget is a tool used by project managers to estimate the
                    total cost of a project. A project budget template includes the
                    detailed estimates of all costs. <Link to="/">Learn more</Link>
                </p>
                <div>
                    <p>Total Budget</p>
                    <p>Amount Spent</p>
                </div>
            </div>
            <div className={classes["right-section"]}>
                <span className={classes.title}>Project & Task</span>
                <p className={classes.subtitle}>
                    In project, a task is an activitythat needs to be accomplished within
                    a defined period of time or by a medicine.{" "}
                    <Link to="/">Learn more</Link>
                </p>
                <div>
                    <div className={classes["project-status"]}>
                        <p>Project & Task</p>
                        <p>Status</p>
                    </div>
                    <div className={classes.subContainer}>
                        {projectStatus.map((item, index) => (
                            <div key={index} className={classes.row}>
                                <p className={classes.project}>{item.project}</p>
                                <p
                                    className={`${classes.status} ${classes[item.status.toLowerCase()]
                                        }`}
                                >
                                    {item.status}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
