export interface LoadingIconProps {
  className?: string;
}

export default function LoadingIcon({ className }: LoadingIconProps) {
  return (
    <svg className={`animate-spin text-white ${className}`} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
