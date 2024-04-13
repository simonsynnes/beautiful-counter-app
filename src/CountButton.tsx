import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { CountBtnProps } from "./interfaces/interfaces";

export default function CountButton({ type, setCount, locked }: CountBtnProps) {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setCount((prevState) => {
      if (type === "minus") {
        const newCount = prevState - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prevState + 1;
        if (newCount > 6) {
          return 6;
        }
        return newCount;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-button">
      {type === "minus" ? (
        <MinusIcon className="count-button-icon" />
      ) : (
        <PlusIcon className="count-button-icon" />
      )}
    </button>
  );
}
