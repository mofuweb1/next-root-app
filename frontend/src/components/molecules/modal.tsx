/**************************************************
 * Modalコンポーネント
 * BootstrapのJSは利用せず、Reactで制御
 *
 **************************************************/
import * as React from "react";

interface IProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IProps> = ({
  isOpen,
  title = "",
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose} />

      {/* modal */}
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {title && (
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={onClose}
                />
              </div>
            )}

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
