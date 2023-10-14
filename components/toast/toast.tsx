type ToastProps = {
  toastState: string | null;
  toastMessage: string | null;
};

const Toast = ({ toastState, toastMessage }: ToastProps) => {
  return (
    <>
      <div className="toast toast-start z-50">
        <div
          className={`alert ${
            toastState === "success" ? "alert-success" : "alert-error"
          } text-sm text-white flex`}
        >
          <svg
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                toastState === "success"
                  ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  : "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{toastMessage}</span>
        </div>
      </div>
    </>
  );
};

export default Toast;
