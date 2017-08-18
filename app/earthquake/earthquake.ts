export default class Earthquake {
  usgsTitle: string;
  latitude: number;
  longitude: number;
  time: number;
  magnitude: number;
  url: string;

  constructor(usgsTitle: string, time: number, magnitude: number, url: string, latitude: number, longitude: number) {
    this.usgsTitle = usgsTitle;
    this.time = time;
    this.magnitude = magnitude;
    this.url = url;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getTimeOccurred(): Date {
    return new Date(this.time)
  }
}
