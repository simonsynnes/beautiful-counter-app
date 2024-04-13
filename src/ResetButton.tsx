import { ResetIcon } from "@radix-ui/react-icons";
import { ResetBtnProps } from "./interfaces/interfaces";

const ResetButton = ({ setCount }: ResetBtnProps) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setCount(0);
    event.currentTarget.blur();
  };

  return (
    <button onClick={handleClick} className="reset-button" type="button">
      <ResetIcon className="reset-button-icon" />
    </button>
  );
};

export default ResetButton;
