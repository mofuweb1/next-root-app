/**************************************************
 * Field（レイアウト専用）
 *
 **************************************************/
import * as React from "react";

// const fieldClass = "grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 items-start";
const fieldClass = "grid grid-cols-[12rem_1fr] gap-x-3 gap-y-1 items-start";

interface IProps {
  label: React.ReactNode;
  control: React.ReactNode;
  validationMessage?: React.ReactNode;
}

export const Field: React.FC<IProps> = ({
  label,
  control,
  validationMessage,
}) => {
  return (
    <div className={fieldClass}>
      {/* Label */}
      <div>{label}</div>

      {/* Control */}
      <div>{control}</div>

      {/* Spacer: validationMessage を control 下に配置するため */}
      <div />

      {/* ValidationMessage */}
      <div>{validationMessage}</div>
    </div>
  );
};
