import useDateStore from "@store/useDateStore";
import CalenderItem from "./CalenderItem";

const CalendarContent = () => {
  const { currentDate } = useDateStore();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDayOfMonth = currentDate.startOf("month").day();
  const daysInMonth = currentDate.daysInMonth();

  return (
    <div className="grid grid-cols-7 gap-2">
      {daysOfWeek.map((day) => (
        <div key={day} className="text-center font-bold p-2">
          {day}
        </div>
      ))}

      {Array.from({ length: startDayOfMonth }).map((_, idx) => (
        <div key={`empty-${idx}`} />
      ))}
      {Array.from({ length: daysInMonth }).map((_, idx) => (
        <CalenderItem day={idx} key={`day-${idx}`} />
      ))}
    </div>
  );
};
export default CalendarContent;
