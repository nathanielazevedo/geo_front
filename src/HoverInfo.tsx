import React from "react";

function HoverInfo({ hoveredPoint }: { hoveredPoint: any }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        backgroundColor: "rgb(0,0,0,0.5)",
        padding: "5px",
        textAlign: "left",
        lineHeight: "0.5",
        left: "15px",
      }}
    >
      <h5>IP Address: &nbsp;{hoveredPoint?.ip_address}</h5>
      <h5>Country: &nbsp;{hoveredPoint?.address_country}</h5>
      <h5>Country Code: &nbsp;{hoveredPoint?.address_country_code}</h5>
      <h5>Locality: &nbsp;{hoveredPoint?.address_locality}</h5>
      <h5>Region: &nbsp;{hoveredPoint?.address_region}</h5>
      <h5>Latitude: &nbsp;{hoveredPoint?.latitude}</h5>
      <h5>Longitude: &nbsp;{hoveredPoint?.longitude}</h5>
      <h5>Postal Code: &nbsp;{hoveredPoint?.postal_code}</h5>
      <h5>Time Zone: &nbsp;{hoveredPoint?.time_zone}</h5>
    </div>
  );
}

export default HoverInfo;
