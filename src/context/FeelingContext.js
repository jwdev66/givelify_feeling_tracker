import React, { useState } from "react";
import { getCalendarData, getDays } from "utils";

const FeelingContext = React.createContext();

export const FeelingProvider = ({ children }) => {
  const [calendarData, saveCalendarData] = useState(() => getCalendarData());
  const [currentIndex, setCurrentIndex] = useState(() => getDays());
  const [feelingValue, setFeelingValue] = useState(0);
  const [feelingContent, setFeelingContent] = useState("");

  return (
    <FeelingContext.Provider
      value={{
        feelingValue,
        setFeelingValue,
        feelingContent,
        setFeelingContent,
        calendarData,
        saveCalendarData,
        currentIndex,
        setCurrentIndex,
      }}
    >
      {children}
    </FeelingContext.Provider>
  );
};

export const FeelingConsumer = FeelingContext.Consumer;

export default FeelingContext;
