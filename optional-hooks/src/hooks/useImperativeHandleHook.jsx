import React, { useRef, useImperativeHandle, useState } from "react";

/**
 * * useImperativeHandle hook is used if you want to use an ref locally and attach it with the forwarded ref
 * * forwardRef is used to pass on the ref to the child component
 *
 * ! passing on ref without forwardRef causes an error
 * ! Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
 *
 * @param ref the forwarded ref
 * @param anonymousFunction which returns the desired actions
 * @param dependencyArray
 */
function useImperativeHandleHook() {
  const inputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  return (
    <>
      <section>
        <h1>useImperativeHandle Hook</h1>
        <div>
          <CustomInput ref={inputRef} color="lightpink" />
          <button onClick={() => inputRef.current.foc()}>Focus</button>
        </div>
        <div>
          <button onClick={() => setIsOpen((prev) => !prev)}>Open</button>
          <button onClick={() => modalRef.current?.focusClose()}>
            Focus Close
          </button>
          <button onClick={() => modalRef.current?.focusConfirm()}>
            Focus Confirm
          </button>
          <button onClick={() => modalRef.current?.focusDeny()}>
            Focus Deny
          </button>
          <ConfirmationModal ref={modalRef} isOpen={isOpen} />
        </div>
      </section>
    </>
  );
}

const CustomInput = React.forwardRef(({ color }, ref) => {
  const inputRef1 = useRef();

  useImperativeHandle(
    ref,
    () => ({
      foc: () => {
        inputRef1.current.focus();
      },
    }),
    []
  );

  return (
    <>
      <input
        ref={inputRef1}
        type="text"
        style={{
          border: "none",
          backgroundColor: color,
          padding: ".25em",
        }}
      />
    </>
  );
});

const ConfirmationModal = React.forwardRef(({ isOpen }, ref) => {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return (
        isOpen && {
          focusClose: () => closeRef.current.focus(),
          focusConfirm: () => confirmRef.current.focus(),
          focusDeny: () => denyRef.current.focus(),
        }
      );
    },
    [isOpen]
  );

  if (!isOpen) return null;
  return (
    <div className="modal" style={{ display: "contents" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Title</h5>
            <button ref={closeRef} className="btn-close"></button>
          </div>
          <div className="modal-body">Do you confirm?</div>
          <div className="modal-footer">
            <button ref={confirmRef} className="btn">
              Yes
            </button>
            <button ref={denyRef} className="btn">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default useImperativeHandleHook;
