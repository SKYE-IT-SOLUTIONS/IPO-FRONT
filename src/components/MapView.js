import React, { useCallback } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { Grid } from "@mui/material";
import { useRef } from "react";

const mapContainerStyle = {
  height: "250px",
  width: "100%",
};

const defaultProps = {
  center: {
    lat: 6.06125,
    lng: 80.56805,
  },

  zoom: 11,
};

const options = {
  desableDefaultUI: true,
  zoomControl: true,
};



export default function MapView() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB8kU10whTTqpO0IALsXuoDhpNl_fRucYU",
  });

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading map";
  if (!isLoaded) return "Loading map";

  return (
    <div>
      <Grid container direction="column" justifyContent="center">
        <Grid item>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={defaultProps.zoom}
            center={defaultProps.center}
            options={options}
            onLoad={onMapLoad}
          >
            <Marker
              position={{
                lat: defaultProps.center.lat,
                lng: defaultProps.center.lng,
              }}
            />
          </GoogleMap>
        </Grid>
      </Grid>
    </div>
  );
}
