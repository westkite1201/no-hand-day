import { ALL } from "@constants/default";
import useDateStore from "@store/useDateStore";
import { checkIsHandDay, lunarDate } from "@utils/date";
import moment from "moment";

type CalenderItemProps = {
  day: number;
};
const CalenderItem = ({ day }: CalenderItemProps) => {
  const { targetDate, currentDate } = useDateStore();
  const year = currentDate.year();
  const month = currentDate.month() + 1; // moment.js의 month()는 0부터 시작하므로 +1 필요
  const date = lunarDate(year, month, day + 1);
  const isHandDay = checkIsHandDay(ALL, date?.day);

  const thisDate = moment(`${year}-${month}-${day + 1}`);
  const selectedDate = targetDate.isSame(thisDate, "day");
  return (
    <div
      className={`flex-col text-center p-4 rounded-md  ${
        selectedDate ? "border-4 border-blue-500" : ""
      }`}
      style={{ backgroundColor: isHandDay ? "" : "#3dbc26" }}
    >
      <p>{day + 1}</p>
      <p className="rounded-md ">{`${date?.month}월 ${date.day}일`}</p>
      {isHandDay ? "" : "손 없는날"}
      <div className="flex justify-center items-center">
        {isHandDay ? "" : <p>🚚 ✅</p>}
        {/* <Image src={imagePath} alt="" width={40} height={40} /> */}
      </div>
    </div>
  );
};

export default CalenderItem;
