import { useState } from "react";
import classes from "./MyProfile.module.scss";
import InputField from "../../../components/common/InputField/InputField";
import IconImage from "../../../components/common/IconImage/IconImage";
import editIcon from "../../../assets/icons/edit.png";
import Button from "../../../components/common/Button/Button"

const BankInfo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        bankName: "HDFC Bank",
        bankAccNo: "789876786512",
        IFSCECode: "EDR546785",
        PANNo: "345RER423",
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
                                label: "Bank Name",
                                type: "text",
                                name: "bankName",
                                value: formData.bankName,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "Bank Account No",
                                type: "text",
                                name: "bankAccno",
                                value: formData.bankAccNo,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "IFSCE Code",
                                type: "text",
                                name: "IFSCECode",
                                value: formData.IFSCECode,
                                onChange: handleInputChange
                            }}
                        />
                        <InputField
                            {...{
                                label: "PAN No",
                                type: "text",
                                name: "PANNo",
                                value: formData.PANNo,
                                onChange: handleInputChange
                            }}
                        />
                        <Button {...{ label: "Save", handleClick: handleSaveClick }} />
                    </div>
                ) : (
                    <div className={classes["info-view"]}>
                        <p>Bank Name: {formData.bankName}</p>
                        <p>Bank Account No: {formData.bankAccNo}</p>
                        <p>IFSCE Code: {formData.IFSCECode}</p>
                        <p>PAN No: {formData.PANNo}</p>
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

export default BankInfo;
