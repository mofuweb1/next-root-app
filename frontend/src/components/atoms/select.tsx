/**************************************************
 * Selectコンポーネント
 *
 **************************************************/
import * as React from "react";

const selectClass =
  "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 " +
  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

const selectInvalidClass =
  "border-red-500 focus:border-red-500 focus:ring-red-500";
interface Option {
  key: string;
  label: string;
}

interface IProps {
  // 値の代入はデフォルト値
  id: string;
  name: string; // inputの名前
  placeholder?: string; // placeholder
  value?: string; // 値
  invalid?: boolean; // validationの状態
  disabled?: boolean; // isLoadingで活性 / 非活性
  options: Option[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>; // 入力後のイベント ※React Hook Formで使えるか確認が必要
  onBlur?: React.FocusEventHandler<HTMLSelectElement>; // 常時、変更イベント
}

export const Select: React.FC<IProps> = ({
  // 値の代入はデフォルト値
  id,
  name,
  placeholder,
  value = "",
  invalid = false,
  disabled = false,
  options,
  onChange,
  onBlur,
}) => {
  // invalid時、後ろの追加クラスが優先される
  const className = [selectClass, invalid ? selectInvalidClass : ""].join(" ");

  return (
    <select
      id={id}
      name={name}
      className={className}
      value={value}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      aria-invalid={invalid}
    >
      {placeholder !== undefined && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}

      {options.map((option) => (
        <option key={option.key}>{option.label}</option>
      ))}
    </select>
  );
};
