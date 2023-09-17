import { useState } from "react";
import classes from "./MyProfile.module.scss";
import InputField from "../../../components/common/InputField/InputField";
import IconImage from "../../../components/common/IconImage/IconImage";
import editIcon from "../../../assets/icons/edit.png";
import Button from "../../../components/common/Button/Button"


const EmergencyContact = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        primaryName: "",
        primaryRelationship: "",
        primaryPhone: "",
        secondaryName: "",
        secondaryRelaionship: "",
        secondaryPhone: "",
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
                        <h5>Primary</h5>
                        <InputField
                            {...{
                                label: "Name",
                                type: "text",
                                name: "primaryName",
                                value: formData.primaryName,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Relationship",
                                type: "text",
                                name: "primaryRelationship",
                                value: formData.primaryRelationship,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Phone",
                                type: "text",
                                name: "primaryPhone",
                                value: formData.primaryPhone,
                                onChange: handleInputChange
                            }}
                        />
                        <h5>Primary</h5>
                        <InputField
                            {...{
                                label: "Name",
                                type: "text",
                                name: "secondaryName",
                                value: formData.secondaryName,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Relationship",
                                type: "text",
                                name: "secondaryRelationship",
                                value: formData.secondaryRelaionship,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Phone",
                                type: "text",
                                name: "secondaryPhone",
                                value: formData.secondaryPhone,
                                onChange: handleInputChange
                            }}
                        />
                        <Button {...{ label: "Save", handleClick: handleSaveClick }} />
                    </div>
                ) : (
                    <div className={classes["info-view"]}>
                        <h5>Primary</h5>
                        <p>Name: {formData.primaryName}</p>
                        <p>Relationship: {formData.primaryRelationship}</p>
                        <p>Phone: {formData.primaryPhone}</p>
                        <h5>Secondary</h5>
                        <p>Name: {formData.secondaryName}</p>
                        <p>Relationship: {formData.secondaryRelaionship}</p>
                        <p>Phone: {formData.secondaryPhone}</p>
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

export default EmergencyContact;
