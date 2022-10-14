import React from "react";
import "../../Styles/Input.scss";

interface Icontent {
  type: string;
  label: string;
  labelName: string;
  placeholder: string;
  name: string;
  className: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  value: undefined | string;
}

const Input = ({ type, placeholder, name, onChange }: Icontent) => {
  return (
    <div className="inputGroup">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={"inputGroup_input inputGroup_input--field"}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
