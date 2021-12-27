import { useState, useCallback } from "react";

import "./styles/global.scss";

import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleClickButton = useCallback(
    (id: number) => {
      setSelectedGenreId(id);
    },
    [selectedGenreId]
  );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        handleClickButton={handleClickButton}
        selectedGenreId={selectedGenreId}
      />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
