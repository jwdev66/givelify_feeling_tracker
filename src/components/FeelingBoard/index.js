import "./index.scss";
import FeelingButton from "./FeelingButton";
import SaveButton from "./SaveButton";
import useFeelingContext from "context/useFeelingContext";

function FeelingBoard() {  
  const { feelingValue, feelingContent, setFeelingContent } = useFeelingContext();

  return (
    <div className="feeling-board">
      <div className="feeling-header">
        <span className="feeling-title">How are you feeling today?</span>
        <div className="feeling-status">
          <span className="feeling-text">Awful</span>
          <div className="feeling-button-list">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <FeelingButton
                  key={index}
                  value={index + 1}
                  selected={feelingValue === index + 1}
                />
              ))}
          </div>
          <span className="feeling-text">Amazing</span>
        </div>
      </div>

      <textarea
        className="feeling-content"
        value={feelingContent}
        onChange={(e) => setFeelingContent(e.target.value)}
        placeholder="What made you feel that way?"
        disabled={!feelingValue}
      />

      <div className="feeling-footer">
        <span className="footer-date">Jul 23</span>
        {feelingContent.length ? <SaveButton feelingValue={5} /> : null}
      </div>
    </div>
  );
}

export default FeelingBoard;
