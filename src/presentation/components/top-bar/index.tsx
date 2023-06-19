import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../main/store";

export interface TopBarProperties {
  logged: boolean;
}
export default function TopBar(
  props: TopBarProperties
): JSX.Element {
  const [logged, setlogged] = useState(false)
  const userAccessStatus = useSelector((state: RootState) => state.userAccess.status);

  useEffect(() => {
    if (userAccessStatus === 'success') {
      setlogged(true);
    } else {
      setlogged(false);
    }

  }, [userAccessStatus]);

  return (
    <div className="flex flex-row justify-around w-screen p-12">

    </div>
  );
}

