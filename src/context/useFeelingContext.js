import { useContext } from "react";
import FeelingContext from "./FeelingContext";

export default function useFeelingContext() {
  const context = useContext(FeelingContext);
  return context;
};
