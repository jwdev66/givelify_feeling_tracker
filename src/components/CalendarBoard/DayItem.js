import "./index.scss";
import useFeelingContext from "context/useFeelingContext";
import styled from "styled-components";
import { FeelingColors } from "utils";

const StyledFeelingStatus = styled.div`
  color: ${(props) =>
    props.feelingValue ? FeelingColors[props.feelingValue] : "#CCCCCC"};
  background: ${(props) =>
    props.feelingValue ? "#FFFFFF" : "transparent"};
`;

function DayItem({ dayData }) {
  const {     
    setFeelingValue,
    setFeelingContent,
    setCurrentIndex,
    currentIndex,
    calendarData,
  } = useFeelingContext();

  const handleDayItemClick = () => {
    const index = dayData.index;    
    setCurrentIndex(index);
    setFeelingValue(calendarData[index].feelingValue);
    setFeelingContent(calendarData[index].feelingContent);
  };

  return (
    <div className={`day-item ${currentIndex === dayData.index ? 'selected' : ''}`} onClick={() => handleDayItemClick()}>
      <StyledFeelingStatus
        className="feeling-status"
        feelingValue={dayData.feelingValue}
      >
        {dayData.feelingValue ? dayData.feelingValue : ""}
      </StyledFeelingStatus>
      <span className="date">{dayData.date}</span>
      <div className="feeling-content">
        {dayData.feelingValue ? dayData.feelingContent : ""}
      </div>
    </div>
  );
}

export default DayItem;
