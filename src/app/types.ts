export type WeatherApiData = {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    humidity: number;
    wind_kph: number;
    precip_mm: number;
    uv: number;
    air_quality: {
      "us-epa-index": number;
    };
  };
};

export type WeatherContextType = {
  weatherApiData: WeatherApiData | null;
};
