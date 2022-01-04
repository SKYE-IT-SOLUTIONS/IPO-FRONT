import React,{ useLayoutEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker} from "google-maps-react";
import styled from "styled-components";

const Map1=styled(Map)`

`;
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function MapView() {
  const [wid, hei] = useWindowSize();
  let containerStyle;

  if(wid>1080){
     containerStyle = {
      width:wid/3.1,
      height:hei/1.66,
    }
  }
  else{
    containerStyle = {
      width:wid,
      height:hei/3.8,
    }
  }
  const displayMarkers = () => {
    return (
      
      <Marker
        title={"University of Agricultural"}
        position={{
          lat: 6.06029968425679,
          lng: 80.5681055823947,
        }}
        label={"AGRI IPO"}
      />
    );
  };

  return (
    <div>
      {/* <span>Window size: {wid} x {hei}</span> */}
    <Map1
      google={window.google}
      zoom={10}
      containerStyle={containerStyle}
      initialCenter={{ lat: 6.06029968425679, lng: 80.5681055823947 }}
    >
      {displayMarkers()}
       
    </Map1>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB8kU10whTTqpO0IALsXuoDhpNl_fRucYU",
})(MapView);
