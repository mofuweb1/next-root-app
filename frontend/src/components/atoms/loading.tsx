/**************************************************
 * Spinnerコンポーネント
 *
 **************************************************/
import * as React from "react";

const overlayClass = "absolute inset-0 z-[1060] flex items-center justify-center bg-white/75";

const spinnerClass = "h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent";

const labelClass = "mt-2 text-sm text-gray-600";
interface IProps {
  isLoading: boolean;
  label?: string;
}

export const Loading: React.FC<IProps> = ({ isLoading, label = "処理中..." }) => {
  if (!isLoading) return null;

  return (
    <div
      className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ background: "rgba(255,255,255,.75)", zIndex: 1060 }}
      role="status"
      aria-live="polite"
      aria-busy="true">
      <div className="d-flex flex-column align-items-center gap-2">
        <div className="spinner-border text-primary" aria-hidden="true" />
        <div className="small text-secondary">{label}</div>
      </div>

      <div className={overlayClass} role="status" aria-live="polite" aria-busy="true">
        <div className="flex flex-col items-center">
          <div className={spinnerClass} aria-hidden="true" />
          <div className={labelClass}>{label}</div>
        </div>
      </div>
    </div>
  );
};
