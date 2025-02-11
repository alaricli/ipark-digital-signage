import { useWeather } from "../context/WeatherContext";
import { useEffect, useState } from "react";
import { getWeatherEmoji } from "../util/weatherEmojiMap";

export default function TodayWidget() {
  const { weatherApiData } = useWeather();
  // const imageUrl = weatherApiData?.current?.condition?.icon
  // ? `https:${weatherApiData?.current.condition.icon}`
  // : "/Empty.png";
  const [time, setTime] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [weekday, setWeekday] = useState<string | null>(null);
  const weatherEmoji = getWeatherEmoji(
    (weatherApiData?.current.condition.code as number) ?? 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Intl.DateTimeFormat("zh-CN", {
          timeZone: "Asia/Shanghai",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date())
      );
      setDate(
        new Intl.DateTimeFormat("zh-CN", {
          timeZone: "Asia/Shanghai",
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        }).format(new Date())
      );
      setWeekday(
        new Intl.DateTimeFormat("zh-CN", {
          timeZone: "Asia/Shanghai",
          weekday: "long", // ✅ This gives the full day name
        }).format(new Date())
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 bg-white p-6 rounded-lg shadow-md w-[500px]">
      {/* Row 1: Time & Date */}
      <div className="flex font-medium justify-between">
        <p className="text-[50px] leading-none">{time}</p>
        <div className="flex flex-col items-end text-2xl">
          <p>{date}</p>
          <p>{weekday}</p>
        </div>
      </div>
      {/* Row 2: Weather Information */}
      <div className="flex justify-between items-center">
        {/* <Image src={imageUrl} alt="weather icon" width={150} height={150} /> */}
        <p className="text-[150px] leading-none">{weatherEmoji}</p>
        <div className="flex flex-col items-end text-[50px] font-medium">
          <p>{weatherApiData?.current.temp_c}°C</p>
          <p className="text-2xl font-medium">
            {weatherApiData?.current.condition.text}
          </p>
        </div>
      </div>

      {/* Row 3: Location */}

      <div className="flex items-center justify-center mt-2">
        <p className="font-medium text-2xl"> 📍: 佛山, 广东, 中国</p>
      </div>
    </div>
  );
}
