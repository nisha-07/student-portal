import { useState } from "react";
import classes from "./MyProfile.module.scss";
import InputField from "../../../components/common/InputField/InputField";
import IconImage from "../../../components/common/IconImage/IconImage";
import editIcon from "../../../assets/icons/edit.png";
import Button from "../../../components/common/Button/Button"


const PersnoalInfo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        passportNo: "ST2345",
        passportExpDate: "23/2/2025",
        telephone: "9834546785",
        nationality: "Indian",
        religion: "Hindu",
        maritalStatus: "Single",
        spouse: "",
        noOfChildren: "",
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
                                label: "Passport No",
                                type: "text",
                                name: "passportNo",
                                value: formData.passportNo,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Passport exp date",
                                type: "text",
                                name: "passportExpDate",
                                value: formData.passportExpDate,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Telephone",
                                type: "text",
                                name: "telephone",
                                value: formData.telephone,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Nationality",
                                type: "text",
                                name: "nationality",
                                value: formData.nationality,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Religion",
                                type: "text",
                                name: "religion",
                                value: formData.religion,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Marital status",
                                type: "text",
                                name: "maritalStatus",
                                value: formData.maritalStatus,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Employement of Spouse",
                                type: "text",
                                name: "spouse",
                                value: formData.spouse,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "No. of Children",
                                type: "text",
                                name: "noOfChildren",
                                value: formData.noOfChildren,
                                onChange: handleInputChange
                            }}
                        />
                        <Button {...{ label: "Save", handleClick: handleSaveClick }} />
                    </div>
                ) : (
                    <div className={classes["info-view"]}>
                        <p>Passport No: {formData.passportNo}</p>
                        <p>Passport exp date: {formData.passportExpDate}</p>
                        <p>Telephone: {formData.telephone}</p>
                        <p>Nationality: {formData.nationality}</p>
                        <p>Religion: {formData.religion}</p>
                        <p>Marital status: {formData.maritalStatus}</p>
                        <p>Employement of Spouse: {formData.spouse}</p>
                        <p>No. of Children: {formData.noOfChildren}</p>
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

export default PersnoalInfo;
