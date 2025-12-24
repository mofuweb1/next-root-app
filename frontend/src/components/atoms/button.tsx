/**************************************************
 * Buttonコンポーネント
 *
 **************************************************/
import * as React from "react";

const baseButtonClass =
  "inline-flex items-center justify-center rounded px-4 py-2 font-medium " +
  "focus:outline-none focus:ring-2 focus:ring-offset-2 " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

type Variant = "primary" | "secondary" | "warning" | "danger" | "info";

const variantClassMap: Record<Variant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  warning: "bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-yellow-400",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  info: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-gray-400",
};

interface IProps {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]; // button | submit | resetか?
  variant?: Variant; // ボタンの種類
  disabled?: boolean; // isLoadingで活性 / 非活性
  onClick: React.MouseEventHandler<HTMLButtonElement>; // ボタンイベント
  children?: React.ReactNode; // ボタンテキスト
}

export const Button: React.FC<IProps> = ({
  // 値の代入はデフォルト値
  type = "button",
  variant = "info",
  disabled = false,
  onClick,
  children,
}) => {
  const className = [baseButtonClass, variantClassMap[variant]].join(" ");

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
