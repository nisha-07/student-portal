import { useState } from "react";
import classes from "./ProfileInfo.module.scss";
import InputField from "../InputField/InputField";
import Avatar from "../Avatar/Avatar";
import avartIcon from "../../../assets/icons/avatar.png";
import IconImage from "../IconImage/IconImage";
import editIcon from "../../../assets/icons/edit.png";
import Button from "../Button/Button"


const ProfileInfo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        phone: "8734565489",
        email: "gopi@example.com",
        birthDate: "2/09/2000",
        address: "2, Gokuldham Co-operative, Dwarka, Gujrat",
        gender: "Female",
        reportsTo: "Kanha"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    return (
        <div className={classes["profile-info"]}>
            <div>
                <Avatar
                    {...{ src: avartIcon, altText: 'avatar', avatarClassName: classes.avatar }} />
            </div>
            <div className={classes["default-info"]}>
                <p className={classes.name}>Nisha Sataki</p>
                <p>Student</p>
                <p>Student Id: MAC1920</p>
                <p>Date of joining: 12/02/2022</p>
            </div>
            <div className={classes["edit-info"]}>
                {isEditing ? (
                    <div>
                        <InputField
                            {...{
                                label: "Phone",
                                type: "text",
                                name: "name",
                                value: formData.phone,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Email",
                                type: "email",
                                name: "email",
                                value: formData.email,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Birthdate",
                                type: "text",
                                name: "birthDate",
                                value: formData.birthDate,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Address",
                                type: "text",
                                name: "address",
                                value: formData.address,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Gender",
                                type: "text",
                                name: "gender",
                                value: formData.gender,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Reports to",
                                type: "text",
                                name: "reportsTo",
                                value: formData.reportsTo,
                                onChange: handleInputChange
                            }}
                        />
                        <Button {...{ label: "Save", handleClick: handleSaveClick }} />
                    </div>
                ) : (
                    <div className={classes["info-view"]}>
                        <p>Phone: {formData.phone}</p>
                        <p>Email: {formData.email}</p>
                        <p>Birthdate: {formData.birthDate}</p>
                        <p>Addres: {formData.address}</p>
                        <p>Gender: {formData.gender}</p>
                        <p>Reports to: {formData.reportsTo}</p>
                    </div>
                )
                }
            </div>
            <div className={classes["edit-icon"]}>
                <button onClick={handleEditClick}>
                    <IconImage {...{ src: editIcon, altText: 'edit' }} />
                </button>
            </div>
        </div >
    );
};

export default ProfileInfo;
