/**************************************************
 * Validation messageコンポーネント
 *
 **************************************************/
import * as React from "react";

const validationMessageClass = "mt-1 text-sm text-red-600";

interface ValidationMessageProps {
  // eslint-disable-next-line @rushstack/no-new-null
  message?: string | undefined | null;
  isVisible?: boolean;
}

export const ValidationMessage: React.FC<ValidationMessageProps> = ({
  message,
  isVisible = false,
}) => {
  if (!isVisible || !message) return null;

  return (
    <div className={validationMessageClass} role="alert">
      {message}
    </div>
  );
};
