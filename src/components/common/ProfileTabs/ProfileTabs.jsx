import { useState } from 'react';
import classes from "./ProfileTabs.module.scss"
import MyProfile from '../../../pages/Profile/MyProfile';

const ProfileTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'My Profile', content: <MyProfile /> },
        { label: 'Projects', content: "No projects available" },
        { label: 'Documents', content: "No documents available" }
    ];

    return (
        <div>
            <div className={classes["tab-buttons"]}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={activeTab === index ? classes.active : ''}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className={classes["tab-content"]}>
                {tabs[activeTab].content}
            </div>
        </div>
    );
}

export default ProfileTabs;

