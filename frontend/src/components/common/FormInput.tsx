import React from "react";

interface Props {
  label: string;
  name: string;
  warn?: boolean;
  validated?: boolean;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function FormInput(props: Props) {
  return (
    <div className="mt-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {props.label}
      </label>
      <input
        className={
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " +
          (props.warn === true ? "border-red-600" : "") +
          (props.validated === true ? "border-green-600" : "")
        }
        id={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}
