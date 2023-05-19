interface prop {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "danger" }: prop) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
