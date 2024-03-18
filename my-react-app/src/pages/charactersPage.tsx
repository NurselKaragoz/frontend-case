import { UseSelector, useSelector } from "react-redux";

function charactersPage() {
  const characters = useSelector((s: any) => s.character);
  console.log(characters);
  return <div></div>;
}
export default charactersPage;
