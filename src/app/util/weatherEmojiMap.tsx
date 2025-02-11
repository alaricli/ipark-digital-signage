const weatherEmojiMap: Record<number, string> = {
  1000: "☀️", // Sunny
  1003: "🌤", // Partly Cloudy
  1006: "☁️", // Cloudy
  1009: "🌥", // Overcast
  1030: "🌫", // Foggy
  1063: "🌦", // Drizzle
  1066: "❄️", // Snowing
  1087: "⛈", // Thunderstorm
  1114: "🌨", // Hailing
  1135: "🌫", // Mist
  1183: "🌧", // Light Rain
  1192: "🌧", // Heavy Rain
  1243: "🌩", // Thunderstorm
  1273: "⛈", // Storm
  1282: "🌀", // Typhoon
};

export function getWeatherEmoji(conditionCode: number): string {
  return weatherEmojiMap[conditionCode] || "❓";
}
