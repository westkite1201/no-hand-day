import { checkIsHandDay, lunarDate } from "@utils/date";
import { ALL } from "@constants/default";
import moment from "moment";

type MainInformationProps = {
  targetDate: any;
  isHandDay: boolean;
};
const MainInformation = ({ targetDate, isHandDay }: MainInformationProps) => {
  const formattedDate = targetDate.format("yyyy년 MM월 DD일");

  return (
    <div className="p-4">
      <p className="text-2xl p-2">{`손이 ${isHandDay ? "있" : "없"}어요!`}</p>
      <p className="text-4xl">{formattedDate}</p>
    </div>
  );
};

export default MainInformation;
