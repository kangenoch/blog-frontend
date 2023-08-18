// import React from "react";
import { Map, Marker } from "pigeon-maps";

export function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Map height={300} defaultCenter={[42.1, -87.3]} defaultZoom={8.5}>
          <Marker width={50} anchor={[42.2977, -87.8872]} />
        </Map>
      </p>
    </div>
  );
}
// 42.297770, -87.887282
