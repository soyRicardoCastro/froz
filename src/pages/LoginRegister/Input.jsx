import { Field } from "formik";

export default function Input({ type = "text", placeholder, ...props }) {
  return (
    <div className="w-full my-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-green-400">
      <Field
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        required
        className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
        {...props}
      />
    </div>
  );
}
