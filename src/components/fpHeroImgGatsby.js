import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";

export function Cover() {
  return (
    <StaticImage 
    
      src="../images/welcome.webp"
      alt="Välkommen till Optimum städ AB"
      placeholder="blurred"
      imgClassName="cover"
      width={1920}
      height={450}
    />
  );
}
