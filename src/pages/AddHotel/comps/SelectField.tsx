// components/SelectField.jsx
export default function SelectField({ label, options, value, onChange }:any) {
    return (
      <div className="flex flex-col mb-4">
        <label className="font-medium mb-1">{label}</label>
        <select
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
  