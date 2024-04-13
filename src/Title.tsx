import { TitleProps } from "./interfaces/interfaces";

const Title = ({ locked }: TitleProps) => {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit reached! Buy <b>Pro version</b> for &gt;6
        </span>
      ) : (
        "Beatiful Counter"
      )}
    </h1>
  );
};

export default Title;
