/**************************************************
 * Modalコンポーネント
 * BootstrapのJSは利用せず、Reactで制御
 *
 **************************************************/
import * as React from "react";

interface IProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal: React.FC<IProps> = ({ isOpen, title = "", children, footer }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* modal */}
      <div className="modal fade show d-block" tabIndex={-1} role="dialog" aria-modal="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {title && (
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
              </div>
            )}

            <div className="modal-body">{children}</div>
            <div className="modal-footer">{footer != null && <div className="modal-footer">{footer}</div>}</div>
          </div>
        </div>
      </div>
    </>
  );
};
