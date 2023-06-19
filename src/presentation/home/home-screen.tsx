import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../main/hooks/window-dimensions";
import { generateRandom } from "./actions/helpers";

export default function HomeScreen(): JSX.Element {
  const { width } = useWindowDimensions();
  const [ramdomNumber, setRamdomNumber] = useState<number>();
  const navigation = useNavigate();

  useEffect(() => {
    setRamdomNumber(generateRandom());
  }, [])

  return (
    <div className="bg-light-gray overflow-hidden">
      <div className="
          flex
          items-center
          justify-center
          flex-col
      ">
        <h3>Width of Screen: {width}</h3>
        <h3>Random number: {ramdomNumber}</h3>
        <button onClick={() => navigation("/login")}>Navigate to login</button>
      </div>
    </div>
  );
}
