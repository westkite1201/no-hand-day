import moment, { Moment } from "moment";
import { create } from "zustand";

interface DateStore {
  targetDate: Moment;
  currentDate: Moment;
  currentYear: number;
  currentMonth: number | string;
  goPrevMonth: () => void;
  goNextMonth: () => void;
}

const useDateStore = create<DateStore>()((set) => ({
  targetDate: moment(),
  currentDate: moment(),
  currentYear: moment().year(),
  currentMonth: moment().month() + 1,
  goPrevMonth: () =>
    set((state) => ({
      currentDate: state.currentDate.clone().subtract(1, "month"),
    })),
  goNextMonth: () =>
    set((state) => ({
      currentDate: state.currentDate.clone().add(1, "month"),
    })),
}));

export default useDateStore;
