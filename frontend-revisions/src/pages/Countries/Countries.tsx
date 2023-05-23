import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GetContinentQuery } from "../../gql/graphql";
import { Select, Table } from "antd";
import "../Continents/Continents.css";
import { ContinentsType } from "../../App";
import Title from "antd/es/typography/Title";

const GET_CONTINENT_BY_ID = gql`
  query getContinent($code: ID!) {
    continent(code: $code) {
      countries {
        name
        emojiU
        code
        emoji
      }
    }
  }
`;

type Country = {
  __typename?: "Country" | undefined;
  name: string;
  emojiU: string;
  code: string;
  emoji: string;
};

type props = {
  continents: ContinentsType | undefined;
};

const Countries = ({ continents }: props) => {
  const [countries, setCountries] = useState<Country[]>();
  const [selectedContinent, setSelectedContinent] = useState("AF");
  const { data, refetch } = useQuery<GetContinentQuery>(GET_CONTINENT_BY_ID, {
    variables: { code: selectedContinent },
  });

  const handleChange = (value: string) => {
    setSelectedContinent(value);
  };

  useEffect(() => {
    refetch();
    if (data) {
      setCountries(data.continent?.countries);
    }
  }, [data, refetch]);

  const dataSource = countries?.map((country, index) => ({
    key: index,
    country: country.name,
    flag: country.emoji,
  }));

  const columns = [
    {
      title: "Countries",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Flag",
      dataIndex: "flag",
      key: "flag",
    },
  ];

  return (
    <>
      <div className="continents">
        <h1>Countries</h1>
        <div className="ant-select">
          {continents ? (
            <>
              <Title level={5}>Continent's code</Title>
              <Select
                defaultValue="AF"
                style={{ width: 120 }}
                onChange={handleChange}
                options={continents?.map((continent) => ({
                  value: continent.code,
                  label: continent.code,
                }))}
              ></Select>
            </>
          ) : (
            <Select loading defaultValue="AF" style={{ width: 120 }}></Select>
          )}
          {continents ? (
            <Table columns={columns} dataSource={dataSource}></Table>
          ) : (
            <Table columns={columns} loading></Table>
          )}
        </div>
      </div>
    </>
  );
};

export default Countries;

