import potoWildan from "./assets/PotoWildan.jpg";
import potoFathan from "./assets/ancur.jpg";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Ini Project -Wildan</h1>
      <img src={potoWildan} alt="" className="w-1/2" />

      <h1 className="text-3xl font-bold">Ini Project -Fathan</h1>
      <img src={potoFathan} alt="" className="w-1/2" />
    </>
  );
}
