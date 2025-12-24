/**************************************************
 * Autocomplateコンポーネント
 * input type="text" autocomplate="on"
 *
 **************************************************/
import * as React from "react";

const inputClass =
  "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 " +
  "placeholder:text-gray-400 " +
  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

// バリデーションエラー時（差分）
const inputInvalidClass =
  "border-red-500 focus:border-red-500 focus:ring-red-500";

interface Option {
  key: string;
  label: string;
}

interface IProps {
  // 値の代入はデフォルト値
  type: React.HTMLInputTypeAttribute; // text | numerict | date | checkbox | redioなど
  id: string;
  name: string; // inputの名前
  placeholder?: string; // placeholder
  value?: string; // 値
  invalid?: boolean; // validationの状態
  readOnly?: boolean; // isLoadingで活性 / 非活性 (disableで対応できない部品はreadonlyが必要)
  listId: string;
  options: Option[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // 入力後のイベント ※React Hook Formで使えるか確認が必要
  onBlur?: React.FocusEventHandler<HTMLInputElement>; // 常時、変更イベント
}

export const InputAutocomplete: React.FC<IProps> = ({
  // 値の代入はデフォルト値
  type = "text",
  id,
  name,
  placeholder,
  value,
  invalid = false,
  readOnly = false,
  listId,
  options,
  onChange,
  onBlur,
}) => {
  // invalid時、後ろの追加クラスが優先される
  const className = [inputClass, invalid ? inputInvalidClass : ""].join(" ");

  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className={className}
        autoComplete="on"
        list={listId}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={onChange}
        onBlur={onBlur}
      />
      <datalist id={listId}>
        {options.map((option) => (
          <option key={option.key}>{option.label}</option>
        ))}
      </datalist>
    </>
  );
};
