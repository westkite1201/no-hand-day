'use client';

import moment, { Moment } from 'moment';
import React, { useState, useEffect } from 'react';

function Calendar() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [currentMonth, setCurrentMonth] = useState<Moment>(moment());

  const startDayOfMonth = currentMonth.startOf('month').day();
  const daysInMonth = currentMonth.daysInMonth();

  const goPrevMonth = () => {
    setCurrentMonth((prev) => prev.clone().subtract(1, 'month'));
  };

  const goNextMonth = () => {
    setCurrentMonth((prev) => prev.clone().add(1, 'month'));
  };

  return (
    <div className="border p-4">
      <h2 className="text-center mb-4">{currentMonth.format('MMMM YYYY')}</h2>
      <div className="flex">
        <button
          className="absolute top-2 left-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={goPrevMonth}
        >
          &lt;
        </button>

        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={goNextMonth}
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
        {Array.from({ length: startDayOfMonth }).map((_, idx) => (
          <div key={`empty-${idx}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, idx) => (
          <div key={idx} className="text-center p-2">
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
