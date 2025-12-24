/**************************************************
 * Labelコンポーネント
 *
 **************************************************/
import * as React from "react";

const labelClass = "mb-1 block text-sm font-medium text-gray-700";

const requiredMarkClass = "ml-1 text-red-600";

interface IProps {
  htmlFor?: string; // ラベルとinput idの関連付け
  required?: boolean; // 必須マーク
  children: React.ReactNode; // ラベルテキスト
}

export const Label: React.FC<IProps> = ({
  htmlFor,
  required = false,
  children,
}) => {
  return (
    <label {...(htmlFor ? { htmlFor } : {})} className={labelClass}>
      {children}
      {required && <span className={requiredMarkClass}>*</span>}
    </label>
  );
};
