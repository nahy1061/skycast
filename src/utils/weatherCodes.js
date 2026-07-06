import {
	WiDaySunny, WiNightClear,
	WiDayCloudy, WiNightAltCloudy,
	WiCloud,
	WiDaySprinkle, WiNightAltSprinkle,
	WiDayRain, WiNightAltRain,
	WiDayRainMix, WiNightAltRainMix,
	WiDaySnow, WiNightAltSnow,
	WiDayFog, WiNightFog,
	WiDayShowers, WiNightAltShowers,
	WiDayHail, WiNightAltHail,
	WiDayThunderstorm, WiNightAltThunderstorm,
} from "react-icons/wi";

const weatherCodeMap = {
	"0": {
		day: {
			description: "Sunny",
			icon: WiDaySunny
		},
		night: {
			description: "Clear",
			icon: WiNightClear
		}
	},
	"1": {
		day: {
			description: "Mainly Sunny",
			icon: WiDaySunny
		},
		night: {
			description: "Mainly Clear",
			icon: WiNightClear
		}
	},
	"2": { day: { description: "Partly Cloudy", icon: WiDayCloudy }, night: { description: "Partly Cloudy", icon: WiNightAltCloudy } },
	"3": { day: { description: "Cloudy", icon: WiCloud }, night: { description: "Cloudy", icon: WiCloud } },
	"45": { day: { description: "Foggy", icon: WiDayFog }, night: { description: "Foggy", icon: WiNightFog } },
	"48": { day: { description: "Rime Fog", icon: WiDayFog }, night: { description: "Rime Fog", icon: WiNightFog } },
	"51": { day: { description: "Light Drizzle", icon: WiDaySprinkle }, night: { description: "Light Drizzle", icon: WiNightAltSprinkle } },
	"53": { day: { description: "Drizzle", icon: WiDaySprinkle }, night: { description: "Drizzle", icon: WiNightAltSprinkle } },
	"55": { day: { description: "Heavy Drizzle", icon: WiDaySprinkle }, night: { description: "Heavy Drizzle", icon: WiNightAltSprinkle } },
	"56": { day: { description: "Light Freezing Drizzle", icon: WiDaySprinkle }, night: { description: "Light Freezing Drizzle", icon: WiNightAltSprinkle } },
	"57": { day: { description: "Freezing Drizzle", icon: WiDaySprinkle }, night: { description: "Freezing Drizzle", icon: WiNightAltSprinkle } },
	"61": { day: { description: "Light Rain", icon: WiDayRain }, night: { description: "Light Rain", icon: WiNightAltRain } },
	"63": { day: { description: "Rain", icon: WiDayRain }, night: { description: "Rain", icon: WiNightAltRain } },
	"65": { day: { description: "Heavy Rain", icon: WiDayRain }, night: { description: "Heavy Rain", icon: WiNightAltRain } },
	"66": { day: { description: "Light Freezing Rain", icon: WiDayRainMix }, night: { description: "Light Freezing Rain", icon: WiNightAltRainMix } },
	"67": { day: { description: "Freezing Rain", icon: WiDayRainMix }, night: { description: "Freezing Rain", icon: WiNightAltRainMix } },
	"71": { day: { description: "Light Snow", icon: WiDaySnow }, night: { description: "Light Snow", icon: WiNightAltSnow } },
	"73": { day: { description: "Snow", icon: WiDaySnow }, night: { description: "Snow", icon: WiNightAltSnow } },
	"75": { day: { description: "Heavy Snow", icon: WiDaySnow }, night: { description: "Heavy Snow", icon: WiNightAltSnow } },
	"77": { day: { description: "Snow Grains", icon: WiDaySnow }, night: { description: "Snow Grains", icon: WiNightAltSnow } },
	"80": { day: { description: "Light Showers", icon: WiDayShowers }, night: { description: "Light Showers", icon: WiNightAltShowers } },
	"81": { day: { description: "Showers", icon: WiDayShowers }, night: { description: "Showers", icon: WiNightAltShowers } },
	"82": { day: { description: "Heavy Showers", icon: WiDayShowers }, night: { description: "Heavy Showers", icon: WiNightAltShowers } },
	"85": { day: { description: "Light Snow Showers", icon: WiDaySnow }, night: { description: "Light Snow Showers", icon: WiNightAltSnow } },
	"86": { day: { description: "Snow Showers", icon: WiDaySnow }, night: { description: "Snow Showers", icon: WiNightAltSnow } },
	"95": { day: { description: "Thunderstorm", icon: WiDayThunderstorm }, night: { description: "Thunderstorm", icon: WiNightAltThunderstorm } },
	"96": { day: { description: "Light Thunderstorms With Hail", icon: WiDayHail }, night: { description: "Light Thunderstorms With Hail", icon: WiNightAltHail } },
	"99": { day: { description: "Thunderstorm With Hail", icon: WiDayHail }, night: { description: "Thunderstorm With Hail", icon: WiNightAltHail } },
};

export const defaultWeather = {
	description: "Unknown",
	icon: WiDaySunny,
};

export function getWeatherInfo(code, isDay = true) {
	const entry = weatherCodeMap[code];
	if (!entry) return defaultWeather;
	return isDay ? entry.day : entry.night;
}