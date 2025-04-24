// components/FormField.jsx
export default function FormField({ label, type = "text", value, onChange }: any) {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-3 py-2"
      />
    </div>
  );
}
