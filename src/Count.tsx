import { CountProps } from "./interfaces/interfaces";

const Count = ({ count }: CountProps) => {
  return <p className="count">{count}</p>;
};
export default Count;
