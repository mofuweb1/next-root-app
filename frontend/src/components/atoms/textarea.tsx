/**************************************************
 * Textareaコンポーネント
 *
 **************************************************/
import * as React from "react";

const textareaClass =
  "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 " +
  "placeholder:text-gray-400 " +
  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
  "disabled:opacity-50 disabled:cursor-not-allowed " +
  "resize-vertical"; // textareaらしさ

// バリデーションエラー時（差分）
const inputInvalidClass =
  "border-red-500 focus:border-red-500 focus:ring-red-500";
interface IProps {
  id: string;
  name: string; // inputの名前
  placeholder?: string; // placeholder
  value?: string; // 値
  invalid?: boolean; // validationの状態
  readOnly?: boolean; // isLoadingで活性 / 非活性 (disableで対応できない部品はreadonlyが必要)
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>; // 入力後のイベント ※React Hook Formで使えるか確認が必要
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>; // 常時、変更イベント
}

export const Input: React.FC<IProps> = ({
  // 値の代入はデフォルト値
  id,
  name,
  placeholder,
  value,
  invalid = false,
  readOnly = false,
  onChange,
  onBlur,
}) => {
  // invalid時、後ろの追加クラスが優先される
  const className = [textareaClass, invalid ? inputInvalidClass : ""].join(" ");

  return (
    <textarea
      id={name}
      name={name}
      className={className}
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
