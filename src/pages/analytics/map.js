import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
};
const center = {
  lat: 3.4877,
  lng: -76.52986,
};
const position = [
  { lat: 3.4877, lng: -76.52986 },
  {
    lat: 4.61656,
    lng: -74.10405,
  },
  {
    lat: 4.67053,
    lng: -74.15994,
  },
  {
    lat: 4.69351,
    lng: -74.03302,
  },
  {
    lat: 4.70369,
    lng: -74.03298,
  },
  {
    lat: 4.729,
    lng: -74.04074,
  },
  {
    lat: 3.46463,
    lng: -76.51604,
  },
  {
    lat: 3.4877,
    lng: -76.52986,
  },
  {
    lat: 3.45383,
    lng: -76.55424,
  },
  {
    lat: 3.46461,
    lng: -76.51589,
  },
  {
    lat: 3.48443,
    lng: -76.5258,
  },
  {
    lat: 4.72675,
    lng: -74.08899,
  },
];
// position.map(val => console.log(val))
export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB2RgXIyK0rt-GO89xAoFVzA6V4Ep2H01I",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position[5]}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={position[0]} />
      <Marker position={position[1]} />
      <Marker position={position[2]} />
      <Marker position={position[3]} />
      <Marker position={position[4]} />
      <Marker position={position[5]} />
      <Marker position={position[6]} />
      <Marker position={position[7]} />
      <Marker position={position[8]} />
      <Marker position={position[9]}/>
      <Marker position={position[10]}/>
      <Marker position={position[11]}/>
      <Marker position={position[12]}/>
      {/* {
          center.map((val,ind)=>{
            console.log("hi");
            <Marker position={center[val]} />
          } */}
      {/* )
        } */}
        {/* <MarkerClusterer title="abc" /> */}
    </GoogleMap>
  ) : (
    <></>
  );
}

// export default Map;
