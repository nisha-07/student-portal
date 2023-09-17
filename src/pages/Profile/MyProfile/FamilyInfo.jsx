import { useState } from "react";
import classes from "./MyProfile.module.scss";
import InputField from "../../../components/common/InputField/InputField";
import IconImage from "../../../components/common/IconImage/IconImage";
import editIcon from "../../../assets/icons/edit.png";
import Button from "../../../components/common/Button/Button"

const FamilyInfo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "Jemini",
        relationship: "Mother",
        dob: "12/12/1970",
        phone: "7687986756",
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
            <div className={classes["edit-info"]}>
                {isEditing ? (
                    <div>
                        <InputField
                            {...{
                                label: "Name",
                                type: "text",
                                name: "name",
                                value: formData.name,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Relationship",
                                type: "text",
                                name: "relationship",
                                value: formData.relationship,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Date of birth",
                                type: "text",
                                name: "dob",
                                value: formData.dob,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Phone",
                                type: "text",
                                name: "phone",
                                value: formData.phone,
                                onChange: handleInputChange
                            }}
                        />
                        <Button {...{ label: "Save", handleClick: handleSaveClick }} />
                    </div>
                ) : (
                    <div className={classes["info-view"]}>
                        <p>Name: {formData.name}</p>
                        <p>Relationship: {formData.relationship}</p>
                        <p>Date of birth: {formData.dob}</p>
                        <p>phone: {formData.phone}</p>
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

export default FamilyInfo;
