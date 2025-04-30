import { SelectHTMLAttributes } from "react";
import IOption from "../../models/interfaces/IOption";


interface props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options?: IOption[]
}

export default function Select(props: props) {
  // the used properties:  { value, onChange, multiple } = props
  const { label, options, children } = props
  return (
    <>
      <label className="font-medium mb-1">{label}</label>
      {/* overwrite className if declared ! */}
      <select className="border-b border-gray-300 rounded px-3 py-2"
        {...props}
      >
        {
          options && options.map(opt =>
            <option value={String(opt.value)} key={opt.id ?? String(opt.value)}>
              {opt.label ?? opt.value}
            </option>
          )
        }
        {
          children && children
        }
      </select >
    </>
  );
}
