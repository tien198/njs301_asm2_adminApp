import { ChangeEvent, HTMLInputTypeAttribute } from "react";

type props = {

  label: string;
  type?: HTMLInputTypeAttribute;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ label, type = "text", value, onChange }: props) {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border-b outline-0 border-gray-300 rounded px-3 py-2"
      />
    </div>
  );
}
