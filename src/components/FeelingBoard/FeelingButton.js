import "./index.scss";
import styled from "styled-components";
import { FeelingColors } from "utils";
import useFeelingContext from "context/useFeelingContext";

const StyledFeelingButton = styled.div`
  background: ${(props) =>
    props.selected ? FeelingColors[props.value] : "transparent"};
`;

function FeelingButton({ value, selected }) {
  const { setFeelingValue } = useFeelingContext();

  return (
    
    <StyledFeelingButton
      className={`feeling-button ${selected ? `selected` : ""}`}
      value={value}
      selected={selected}
      onClick={() => setFeelingValue(value)}
    >
      {value}
    </StyledFeelingButton>
  );
}

export default FeelingButton;
