import "./index.scss";
import styled from "styled-components";
import { FeelingColors } from "utils";
import useFeelingContext from "context/useFeelingContext";

const StyledSaveButton = styled.div`
  color: ${(props) => FeelingColors[props.feelingValue]};
  border: 1px solid ${(props) => FeelingColors[props.feelingValue]};
`;

function SaveButton() {
  const {
    feelingValue,
    feelingContent,
    currentIndex,
    calendarData,
    saveCalendarData,
  } = useFeelingContext();

  const handleSave = () => {
    let updatedData = [...calendarData];
    updatedData[currentIndex].feelingValue = feelingValue;
    updatedData[currentIndex].feelingContent = feelingContent;
    saveCalendarData(updatedData);
  };

  return (
    <StyledSaveButton
      className={`save-button`}
      feelingValue={feelingValue}
      onClick={() => handleSave()}
    >
      Save
    </StyledSaveButton>
  );
}

export default SaveButton;
