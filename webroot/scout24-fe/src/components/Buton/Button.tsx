import "./Button.scss";

interface ButtinProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

export const Button: React.FC<ButtinProps> = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      <div className="text">{props.text}</div>
    </button>
  );
};
