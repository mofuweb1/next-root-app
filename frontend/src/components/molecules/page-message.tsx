/**************************************************
 * Page messageコンポーネント
 *
 **************************************************/
import * as React from "react";

const basePageMessageClass = "flex items-center rounded-md border px-4 py-3 text-sm";

type Variant = "success" | "danger" | "warning" | "info";

const variantClassMap: Record<Variant, string> = {
  success: "border-green-300 bg-green-50 text-green-800",
  warning: "border-yellow-300 bg-yellow-50 text-yellow-800",
  danger: "border-red-300 bg-red-50 text-red-800",
  info: "border-blue-300 bg-blue-50 text-blue-800"
};

const closeButtonClass = "ml-4 inline-flex h-5 w-5 items-center justify-center rounded text-current " + "opacity-60 hover:opacity-100 focus:outline-none";

export const PageMessage: React.FC<{
  variant: Variant;
  message?: string;
  onClose?: () => void;
}> = ({ variant, message, onClose }) => {
  if (!message) return null;

  const className = [basePageMessageClass, variantClassMap[variant]].join(" ");

  return (
    <div className={className} role="alert">
      <div className="flex-1">{message}</div>

      {onClose && (
        <button type="button" className={closeButtonClass} aria-label="Close" onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
};
