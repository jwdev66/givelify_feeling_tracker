import { useEffect, useRef } from "react";
import "./index.scss";
import DayItem from "./DayItem";
import useFeelingContext from "context/useFeelingContext";

function CalendarBoard() {
  const { calendarData } = useFeelingContext();
  const scrollEndRef = useRef();
  const calendarScrollBarRef = useRef();

  useEffect(() => {
    scrollEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleWhell = (e) => {
    calendarScrollBarRef.current.scrollTo({ top: 0, left: calendarScrollBarRef.current.scrollLeft + e.deltaY, behaviour: "smooth"})
  }

  return (
    <div className="calendar-board" onWheel={e => handleWhell(e)} ref={calendarScrollBarRef}>
      <div className="day-list">
        {calendarData.map((itemData) => (
          <DayItem key={`${itemData.date}-${itemData.feelingValue}-${itemData.feelingContent}`} dayData={itemData} />
        ))}
        <div ref={scrollEndRef} />
      </div>      
    </div>
  );
}

export default CalendarBoard;
