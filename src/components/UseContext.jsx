import { useContext, useState } from "react";
import { ToggleTheme } from "../App";
import { useEffect } from "react";

function UseContext() {
  const theme = useContext(ToggleTheme);
  const [showParagraph, setShowParagraph] = useState(false);

  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };

  useEffect(() => {
    if (showParagraph) {
      alert("Continue");
    }
  }, [showParagraph]);

  const handleButtonClick = () => {
    setShowParagraph(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Continue</button>
      {showParagraph && (
        <div style={themeStyle}>
          In the quiet corner of a bustling city, where the sounds of traffic
          and hurried footsteps fade into the background, there lies a hidden
          cafe. The aroma of freshly brewed coffee dances in the air, enticing
          passersby to step inside.In the quiet corner of a bustling city, where
          the sounds of traffic and hurried footsteps fade into the background,
          there lies a hidden cafe. The aroma of freshly brewed coffee dances in
          the air, enticing passersby to step inside. The walls are adorned with
          local artwork, and the soft hum of conversation provides a comforting
          soundtrack. As the sunlight streams through the large windows, patrons
          huddle in cozy corners, lost in conversation or immersed in the pages
          of their favorite books.
        </div>
      )}
    </div>
  );
}

export default UseContext;
