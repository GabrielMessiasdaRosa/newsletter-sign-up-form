import { UseFormRegister } from "react-hook-form";

export interface EmailInputProps extends React.HTMLProps<HTMLInputElement> {
  errorMessage?: string;
  registerTag: string;
  register: UseFormRegister<any>;
  required?: boolean;
}

export default function EmailInput({
  label,
  errorMessage,
  register,
  required,
  registerTag,
  ...props
}: EmailInputProps) {
  return (
    <div className="text-darkSlateGrey flex flex-col gap-2">
      <div className="flex font-bold justify-between text-sm">
        <label>Email address</label>
        <span className="text-orange-700">{errorMessage ?? null}</span>
      </div>
      <input
        placeholder="email@company.com"
        className={`${defaultClasses} ${errorMessage && errorClasses}`}
        {...register(registerTag, { required })}
        {...props}
      />
    </div>
  );
}
const defaultClasses = `bg-white border-gray-200 border-2 rounded-md pl-4 pr-2 py-3 w-full focus:outline-none focus:ring-2 focus:ring-darkSlateGrey/50 focus:ring-offset-1 focus:ring-offset-white`;
const errorClasses = `border-orange-200 bg-orange-50 focus:ring-orange-700/50 focus:ring-offset-orange-100`;
