import React, { useState } from 'react'

function ToDoDate() {
  const [dateTime, setDateTime] = useState("");


     setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate}-${formattedTime}`);

  }, 1000);

  return (
    <h2 style={{ marginTop: 0 }} className="date-time">
          {dateTime}
        </h2>
  )
}

export default ToDoDate
