import React from "react";
import GoogleMapReact from "google-map-react";

// import { Container } from './styles';
const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const GoogleMap: React.FC = () => {
  const defaultProps = {
    center: {
      lat: -23.605634348774213,
      lng: -46.74075221184556,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
