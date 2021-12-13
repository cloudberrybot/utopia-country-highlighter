import { Continents } from '../../rtk/features/countries/Continents';
import { Countries } from '../../rtk/features/countries/Countries';
import { EMPTY_STRING } from '../../rtk/features/countries/constants';
import { Header } from '../Heading';
import { Navbar } from '../Navbar';
import { Regions } from '../../rtk/features/countries/Regions';
import { useState } from 'react';

function App() {
  const [continent, setContinent] = useState(EMPTY_STRING);
  const [region, setRegion] = useState(EMPTY_STRING);

  const shouldRender = (props: unknown | unknown[]) => {
    if (Array.isArray(props) && props.length > 0) {
      const result = props.reduce((_, current) => (current && current !== EMPTY_STRING))

      if (result === EMPTY_STRING) {
        return false;
      }
    }

    return props && props !== EMPTY_STRING
  }

  const handleClickContinent = (name: string) => {
    setContinent(name);
    setRegion(EMPTY_STRING);
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto">
        <Header content="Choose a Continent" />
        <Continents onClick={handleClickContinent} />
        {shouldRender(continent) && (
          <>
            <Header content="Choose a Region" />
            <Regions continent={continent} onClick={(name: string) => setRegion(name)} />
          </>
        )}

        {shouldRender([continent, region]) && (
          <>
            <Header content="Choose a Country" />
            <Countries continent={continent} region={region} />
          </>
        )}

      </div>
    </div>
  );
}

export default App;
