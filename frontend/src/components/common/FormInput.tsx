import React from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput(props: Props) {
  return (
    <div className="mt-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder}
      />
    </div>
  );
}
