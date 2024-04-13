import { Dispatch, SetStateAction } from "react";

export interface ResetBtnProps {
  setCount: Dispatch<SetStateAction<number>>;
}

export interface TitleProps {
  locked: boolean;
}

export interface CountProps {
  count: number;
}

export interface CountBtnProps {
  type: string;
  setCount: Dispatch<SetStateAction<number>>;
  locked: boolean;
}
