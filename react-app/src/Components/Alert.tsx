interface prop {
  children: string;
  onClose: () => void;
}

const Alert = ({ children, onClose }: prop) => {
  return (
    <div className="alert alert-warning alert-dismissable fade show">
      {children}

      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
