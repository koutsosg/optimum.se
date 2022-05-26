import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";

export function AboutImg() {
  return (
    <StaticImage 
    
      src="../images/about.webp"
      alt="Välkommen till Optimum städ AB"
      placeholder="blurred"
      className="about-img"
      layout= "fullWidth"
     
    />
  );
}
