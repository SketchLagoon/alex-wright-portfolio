import React from "react";
import Asset1 from "./PNGAssets/Asset1.png";
import Asset2 from "./PNGAssets/Asset2.png";
import Asset3 from "./PNGAssets/Asset3.png";
import Asset4 from "./PNGAssets/Asset4.png";
import Asset5 from "./PNGAssets/Asset5.png";
import Asset6 from "./PNGAssets/Asset6.png";
import Asset7 from "./PNGAssets/Asset7.png";

import { DesktopArtworkContainer, ArtAsset } from "./DesktopArtwork-Styles";

const DesktopArtwork = () => {
  return (
    <DesktopArtworkContainer>
      <ArtAsset
        src={Asset1}
        direction={"up"}
        zIndex="1"
        xOffset="-5rem"
        yOffset="3rem"
        animDelay={
          (Math.round(Math.random() * 100) / 100).toFixed(2).toString() +
          "s"
        }
      />
      <ArtAsset
        src={Asset2}
        direction={"down"}
        zIndex="5"
        xOffset="2rem"
        yOffset="5rem"
        animDelay={
          (Math.round(Math.random() * 100) / 100).toFixed(2).toString() +
          "s"
        }
      />
      <ArtAsset
        src={Asset3}
        direction={"up"}
        zIndex="2"
        xOffset="-1.25rem"
        animDelay={
          (Math.round(Math.random() * 100) / 100).toFixed(2).toString() +
          "s"
        }
      />
      <ArtAsset
        src={Asset4}
        direction={"down"}
        zIndex="4"
        xOffset="8.5rem"
        yOffset="5rem"
        animDelay={
          (Math.round(Math.random() * 100) / 100).toFixed(2).toString() +
          "s"
        }
      />
      <ArtAsset
        src={Asset5}
        direction={"up"}
        zIndex="3"
        xOffset="10rem"
        yOffset="-2rem"
        animDelay={
          (Math.round(Math.random() * 100) / 100).toFixed(2).toString() +
          "s"
        }
      />
      <ArtAsset
        src={Asset6}
        direction={"down"}
        zIndex="7"
        xOffset="15rem"
        yOffset="10rem"
        animDelay={
          (Math.round(Math.random() * 100) / 100).toFixed(2).toString() +
          "s"
        }
      />
      <ArtAsset
        src={Asset7}
        direction={"up"}
        zIndex="6"
        xOffset="15.5rem"
        yOffset="4rem"
        animDelay={
          (Math.round(Math.random() * 100) / 100).toFixed(2).toString() +
          "s"
        }
      />
    </DesktopArtworkContainer>
  );
};

export default DesktopArtwork;
