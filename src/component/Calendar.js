import React, { useEffect, useState } from "react";

function Calendar() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  useEffect(() => {
    // console.log(date, time);
    let h = new Date(time).getHours();
    let m = new Date(time).getMinutes();
    console.log(h, m);
    // console.log(d);
  }, [date, time]);
  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent backdrop-blur-md fixed z-50">
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input type="time" onChange={(e) => setTime(e.target.value)} />
    </div>
  );
}

export default Calendar;
