export interface EarthquakeFeature {
    properties: EarthquakeProperties;
    geometry: number[];
}

export interface EarthquakeProperties {
    title: string;
    time: number;
    mag: number;
    url: string;
}