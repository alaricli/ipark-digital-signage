import Image from "next/image";
import { useWeather } from "../context/WeatherContext";

export default function TodayDetailsWidget() {
  const { weatherApiData } = useWeather();
  const weatherStats = [
    {
      label: "降水量",
      value: weatherApiData?.current.precip_mm ?? "--",
      unit: "毫米 (mm)",
      image: "/rain_mm.png",
    }, // Rain
    {
      label: "空气质量",
      value: weatherApiData?.current.air_quality["us-epa-index"] ?? "--",
      unit: "美国 AQI",
      image: "/aq_us.png",
    }, // Air Quality
    {
      label: "风速",
      value: weatherApiData?.current.wind_kph ?? "--",
      unit: "km/h",
      image: "/wind_speed.png",
    }, // Wind Speed
    {
      label: "湿度",
      value: weatherApiData?.current.humidity ?? "--",
      unit: "%",
      image: "/humidity.png",
    }, // Humidity
    {
      label: "紫外线指数",
      value: weatherApiData?.current.uv ?? "--",
      unit: "",
      image: "/uv.png",
    }, // UV Index (No unit)
  ];

  return (
    <div className="grid grid-cols-5 gap-8">
      {weatherStats.map(({ label, value, unit, image }, index) => {
        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center space-y-2"
          >
            <div className="">
              <Image
                src={image}
                alt={`${label} image`}
                width={150}
                height={150}
              />
            </div>

            <div className="text-4xl">{label}</div>
            <div className="text-4xl">{value}</div>
            {unit && <div className="text-2xl">{unit}</div>}
          </div>
        );
      })}
    </div>
  );
}
