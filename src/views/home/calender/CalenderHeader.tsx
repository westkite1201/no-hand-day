import useDateStore from "@store/useDateStore";
import { Moment } from "moment";

const CalendarHeader = () => {
  const { currentDate, goPrevMonth, goNextMonth } = useDateStore();
  console.log("currentDate =", currentDate);
  return (
    <div className="flex justify-between ">
      <button
        className="p-2 rounded-full hover:bg-yellow-500"
        onClick={goPrevMonth}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </button>
      <h2 className="font-bold text-center mb-4">
        {currentDate.format("YYYY년 MM월")}
      </h2>
      <button
        className="p-2 rounded-full hover:bg-yellow-500"
        onClick={goNextMonth}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    </div>
  );
};
export default CalendarHeader;
