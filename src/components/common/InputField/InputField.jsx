import classes from "./InputField.module.scss"

const InputField = ({ label, name, value, onChange, type }) => {
    return (
        <div className={classes["input-container"]}>
            <label className={classes["input-label"]}>
                {label}:
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={classes["input-value"]}
                />
            </label>
        </div>
    );
}

export default InputField
