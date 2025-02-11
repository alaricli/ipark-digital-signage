"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { WeatherApiData, WeatherContextType } from "../types";

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weatherApiData, setWeatherApiData] = useState<WeatherApiData | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherApiResponse = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHERAPI_KEY}&q=Foshan&aqi=yes&lang=zh_cmn`
        );

        if (!weatherApiResponse) {
          throw new Error("Failed to fetch from api");
        }

        setWeatherApiData(await weatherApiResponse.json());
      } catch (error) {
        console.error("fetch error", error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherApiData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
