import { Moment } from "moment";
import { solarToLunar } from "./luna";
import { EAST, WEST, NORTH, SOUTH, ALL } from "@constants/default";

export type MyDate = {
  year: number;
  month: number;
  day: number;
  leapMonth: number;
};

export const lunarDate = (year: number, month: number, day: number): MyDate => {
  const lunar = solarToLunar(year, month, day) as MyDate;
  return lunar;
};

export function isEndsWithNumbers(
  targetNumber: number,
  num1: number,
  num2: number
) {
  const str = targetNumber.toString();
  return str.endsWith(num1.toString()) || str.endsWith(num2.toString());
}

//동 1, 2
//서 5, 6
//남 3, 4
//북 7, 8
export function checkIsHandDay(
  direction: "east" | "west" | "south" | "north" | "all",
  targetNumber: number
) {
  //east
  if (direction === EAST) return isEndsWithNumbers(targetNumber, 1, 2);
  //west
  if (direction === WEST) return isEndsWithNumbers(targetNumber, 5, 6);
  //south
  if (direction === SOUTH) return isEndsWithNumbers(targetNumber, 3, 4);
  //north
  if (direction === NORTH) return isEndsWithNumbers(targetNumber, 7, 8);

  if ((direction = ALL)) {
    return (
      isEndsWithNumbers(targetNumber, 1, 2) ||
      isEndsWithNumbers(targetNumber, 5, 6) ||
      isEndsWithNumbers(targetNumber, 3, 4) ||
      isEndsWithNumbers(targetNumber, 7, 8)
    );
  }
}
