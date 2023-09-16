export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  disabled,
  className,
  type = "button",
  ...porps
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${buttonBaseClasses} ${className}`}
      {...porps}
    >
      {children}
    </button>
  );
}

const buttonBaseClasses = `bg-darkSlateGrey font-bold w-full px-4  flex items-center justify-center py-3 rounded-md text-white hover:bg-tomato transition-all duration-300`;
