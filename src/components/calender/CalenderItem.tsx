type CalenderItemProps = {
  idx: number;
};
const CalenderItem = ({ idx }: CalenderItemProps) => {
  return (
    <div key={idx} className="text-center p-2">
      {idx + 1}
    </div>
  );
};

export default CalenderItem;
