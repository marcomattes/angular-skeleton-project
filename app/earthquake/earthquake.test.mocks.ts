import Earthquake from './earthquake';

export function mockEarthquakes(): Array<Earthquake> {
  let earthquakes: Array<Earthquake> = [];

  let earthquake: Earthquake = new Earthquake(
    'M 1.8 - 15km E of Anderson, California',
    1482181979580,
    1.84,
    'http://earthquake.usgs.gov/earthquakes/eventpage/nc72741580',
    -122.114502,
    40.4421654
  );

  earthquakes.push(earthquake);

  earthquake = new Earthquake(
    'M 2.0 - 19km SSE of Ridgemark, California',
    1482180615010,
    2.03,
    'http://earthquake.usgs.gov/earthquakes/eventpage/nc72741575',
    -121.2718353,
    36.6580009
  );

  earthquakes.push(earthquake);
  return earthquakes;
}

export const MOCK_EARTHQUAKE_JSON: string = '{\"type\":\"FeatureCollection\",\"metadata\":{\"generated\":1482183064000,\"url\":\"http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson\",\"title\":\"USGS All Earthquakes, Past Month\",\"status\":200,\"api\":\"1.5.2\",\"count\":8352},\"features\":[{\"type\":\"Feature\",\"properties\":{\"mag\":1.84,\"place\":\"15km E of Anderson, California\",\"time\":1482181979580,\"updated\":1482182080355,\"tz\":-480,\"url\":\"http://earthquake.usgs.gov/earthquakes/eventpage/nc72741580\",\"detail\":\"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc72741580.geojson\",\"felt\":null,\"cdi\":null,\"mmi\":null,\"alert\":null,\"status\":\"automatic\",\"tsunami\":0,\"sig\":52,\"net\":\"nc\",\"code\":\"72741580\",\"ids\":\",nc72741580,\",\"sources\":\",nc,\",\"types\":\",geoserve,nearby-cities,origin,phase-data,\",\"nst\":11,\"dmin\":0.07476,\"rms\":0.03,\"gap\":191,\"magType\":\"md\",\"type\":\"earthquake\",\"title\":\"M 1.8 - 15km E of Anderson, California\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[-122.114502,40.4421654,19.44]},\"id\":\"nc72741580\"},{\"type\":\"Feature\",\"properties\":{\"mag\":2.03,\"place\":\"19km SSE of Ridgemark, California\",\"time\":1482180615010,\"updated\":1482182582684,\"tz\":-480,\"url\":\"http://earthquake.usgs.gov/earthquakes/eventpage/nc72741575\",\"detail\":\"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc72741575.geojson\",\"felt\":null,\"cdi\":null,\"mmi\":null,\"alert\":null,\"status\":\"automatic\",\"tsunami\":0,\"sig\":63,\"net\":\"nc\",\"code\":\"72741575\",\"ids\":\",nc72741575,\",\"sources\":\",nc,\",\"types\":\",geoserve,nearby-cities,origin,phase-data,scitech-link,\",\"nst\":20,\"dmin\":0.008518,\"rms\":0.04,\"gap\":70,\"magType\":\"md\",\"type\":\"earthquake\",\"title\":\"M 2.0 - 19km SSE of Ridgemark, California\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[-121.2718353,36.6580009,2.95]},\"id\":\"nc72741575\"}],\"bbox\":[-179.9779,-61.4484,-3.43,179.9638,80.0377,619.4]}';
