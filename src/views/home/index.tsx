'use client';
import moment, { Moment } from 'moment';
import Calendar from '@components/calender';
import { useGetLunPhInfo } from '@hooks/queries/home/useGetLunaPhase';
import Image from 'next/image';
import { useState } from 'react';

const Home = () => {
  const today = new Date();
  const formattedDate = moment(today).format('yyyy년-MM월-dd일');
  const [currentDate, setCurrentDate] = useState<Moment>(moment());

  const currentYear = currentDate.year();
  const currentMonth = currentDate.month(); // This gives 0 for January, 1 for February, etc.
  const currentDay = currentDate.day();

  const { data, isLoading } = useGetLunPhInfo(currentYear, currentMonth);

  console.log(data);
  return (
    <div className="w-full flex-col item-center text-center">
      {/* <TestCompo /> */}
      <div>
        <h1 className="font-nanummyeongjo text-4xl font-bold">오늘의 달</h1>
      </div>
      <div>
        <div className="bg-black flex items-center justify-center">
          <Image
            src="/Full Moon.svg"
            alt="Description of Image"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>

      <p className="text-4xl">{formattedDate}</p>
      <p className="text-2xl">하현달</p>
      <p>월출</p>
      <p>월몰</p>
      <Calendar />
    </div>
  );
};

export default Home;
