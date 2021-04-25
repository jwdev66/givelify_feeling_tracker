import "./App.scss";
import FeelingBoard from "components/FeelingBoard";
import CalendarBoard from "components/CalendarBoard";
import styled from "styled-components";
import { FeelingBGColors, getFooterTitle } from "utils";
import useFeelingContext from "context/useFeelingContext";

const AppContainer = styled.div`
  background: ${(props) => FeelingBGColors[props.feelingValue]}};
`;

function App() {
  const { feelingValue } = useFeelingContext();

  return (
    <AppContainer className="App" feelingValue={feelingValue}>
      <div className="title">Simplejournal</div>
      <div className="feeling-board-container">
        <FeelingBoard />
      </div>
      <CalendarBoard />
      <div className="footer">{getFooterTitle()}</div>
    </AppContainer>
  );
}

export default App;
