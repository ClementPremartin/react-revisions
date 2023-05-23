import { Table } from "antd";
import "./Continents.css";
import { ContinentsType } from "../../App";

type Continents = {
  __typename?: "Continent" | undefined;
  code: string;
  name: string;
}[];

type props = {
  continents: ContinentsType | undefined;
};

const Continents = ({ continents }: props) => {
  const dataSource = continents?.map((continent, index) => ({
    key: index,
    continent: continent.name,
    code: continent.code,
  }));

  const columns = [
    {
      title: "Continent",
      dataIndex: "continent",
      key: "continent",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
  ];

  return (
    <div>
      <div className="continents">
        <h1>Continents</h1>
        <Table columns={columns} dataSource={dataSource}></Table>
      </div>
    </div>
  );
};

export default Continents;

