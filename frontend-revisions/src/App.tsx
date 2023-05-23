import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Countries from "./pages/Countries/Countries";
import Country from "./pages/Country/Country";
import Continents from "./pages/Continents/Continents";
import { CONTINENTS, COUNTRIES, COUNTRY } from "./path";
import { gql, useQuery } from "@apollo/client";
import { ContinentsQuery } from "./gql/graphql";
import { useEffect, useState } from "react";

const GET_CONTINENTS = gql`
  query continents {
    continents {
      code
      name
    }
  }
`;

export type ContinentsType = {
  __typename?: "Continent" | undefined;
  code: string;
  name: string;
}[];

function App() {
  const { data, refetch } = useQuery<ContinentsQuery>(GET_CONTINENTS);
  const [continents, setContinents] = useState<ContinentsType>();

  useEffect(() => {
    if (data) {
      setContinents(data.continents);
    }
  }, [data, refetch]);

  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route
          path={COUNTRIES}
          element={<Countries continents={continents} />}
        />
        <Route path={COUNTRY} element={<Country />} />
        <Route
          path={CONTINENTS}
          element={<Continents continents={continents} />}
        />
      </Routes>
    </div>
  );
}

export default App;

