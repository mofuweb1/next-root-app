/**************************************************
 * CheckBoxコンポーネント
 *
 *
 **************************************************/
import * as React from "react";

const inputCheckboxClass =
  "h-4 w-4 rounded border border-gray-300 text-blue-600 " +
  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

// バリデーションエラー時（差分）
const inputCheckboxInvalidClass =
  "border-red-500 focus:border-red-500 focus:ring-red-500";

interface IProps {
  type: React.HTMLInputTypeAttribute; // text | numerict | date | checkbox | redioなど
  id: string;
  name: string; // inputの名前
  placeholder?: string; // placeholder
  value?: string; // 値
  invalid?: boolean; // validationの状態
  disabled?: boolean; // isLoadingで活性 / 非活性
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // 入力後のイベント ※React Hook Formで使えるか確認が必要
  onBlur?: React.FocusEventHandler<HTMLInputElement>; // 常時、変更イベント
}

export const Radio: React.FC<IProps> = ({
  // 値の代入はデフォルト値
  type = "text",
  id,
  name,
  placeholder,
  value,
  invalid = false,
  disabled = false,
  onChange,
  onBlur,
}) => {
  // invalid時、後ろの追加クラスが優先される
  const className = [
    inputCheckboxClass,
    invalid ? inputCheckboxInvalidClass : "",
  ].join(" ");

  return (
    <input
      type={type}
      id={id}
      name={name}
      className={className}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
