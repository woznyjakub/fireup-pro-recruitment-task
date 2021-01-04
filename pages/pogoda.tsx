import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Section } from '@components/common/Section';
import { Page } from '@components/common/Page';
import { MainNavigation } from '@components/MainNavigation';

const API_KEY = process.env.WEATHER_API_KEY;
console.log('API_KEY', API_KEY);
const menuItems = [
  {
    label: 'Home',
    link: '/',
    color: 'yellow',
  },
  {
    label: 'Pogoda',
    link: '/pogoda',
    color: 'paleblue',
    isActive: true,
  },
];

interface WeatherApiResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  message?: string;
}

const WeatherPage: React.FC = () => {
  const [apiData, setApiData] = useState<WeatherApiResponse>(undefined);
  const [searchedValue, setSearchedValue] = useState<string>('');

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Unknown Error');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setIsError(false);
      setIsLoading(true);

      if (searchedValue) {
        try {
          const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchedValue}&appid=${API_KEY}`);
          const data: WeatherApiResponse = await res.json();

          if (data.cod === 200) {
            setApiData(data);
          } else {
            setIsError(true);
            setErrorMessage(data.message);
          }
        } catch (error) {
          setIsError(true);
          setErrorMessage(error.message);
        }

        setIsLoading(false);
      }
    },
    [searchedValue],
  );

  console.log('searchedValue', searchedValue);
  return (
    <Page>
      <MainNavigation logo={{ url: '/assets/images/logo.jpg', name: 'fireup.pro' }} menuItems={menuItems} />
      <Section>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="city-input">Search weather data for a city:&emsp;</label>
            <input type="text" id="city-input" onChange={handleChange} placeholder="City" />
            <button type="submit">Search</button>

            <div className="py-3">
              {isLoading ? (
                <h2>Loading...</h2>
              ) : isError ? (
                <h2>An error occured: {errorMessage}</h2>
              ) : (
                apiData && (
                  <div>
                    <h2>
                      Results for {apiData.name} (GPS: {apiData.coord.lat}, {apiData.coord.lon}):
                    </h2>
                    <dl>
                      {apiData && (
                        <div className="py-2">
                          <dt>General:</dt>
                          <dd>{apiData.weather[0].description}</dd>
                        </div>
                      )}
                      {apiData.main.humidity && (
                        <div className="py-2">
                          <dt>Humidity (%):</dt>
                          <dd>{apiData.main.humidity}</dd>
                        </div>
                      )}
                      {apiData.main.temp && (
                        <div className="py-2">
                          <dt>Temperature (°K):</dt>
                          <dd>{apiData.main.temp}</dd>
                        </div>
                      )}
                      {apiData.main.pressure && (
                        <div className="py-2">
                          <dt>Pressure (hPa):</dt>
                          <dd>{apiData.main.pressure}</dd>
                        </div>
                      )}
                    </dl>
                  </div>
                )
              )}
            </div>
          </form>
        </div>
      </Section>
    </Page>
  );
};

export default WeatherPage;
