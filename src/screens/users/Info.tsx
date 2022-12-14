import { useOutletContext } from "react-router-dom";

type props = {
  nameOfMyUser: string;
};

const Info = () => {
  const { nameOfMyUser }: props = useOutletContext();

  return <h1>{nameOfMyUser}</h1>;
};

export default Info;
