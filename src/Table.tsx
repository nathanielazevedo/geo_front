import React from "react";

function Table({ points }: { points: any }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "55px",
        backgroundColor: "rgb(0,0,0,0.5)",
        padding: "5px",
        textAlign: "left",
        left: "15px",
      }}
    >
      <table>
        <thead>
          <tr>
            <th>IP Address</th>
            <th>Country</th>
            <th>Country Code</th>
            <th>Locality</th>
            <th>Region</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Postal Code</th>
            <th>Time Zone</th>
          </tr>
        </thead>
        <tbody>
          {points.map((point: any, i: number) => (
            <tr key={i}>
              <td>{point.ip_address}</td>
              <td>{point.address_country}</td>
              <td>{point.address_country_code}</td>
              <td>{point.address_locality}</td>
              <td>{point.address_region}</td>
              <td>{point.latitude}</td>
              <td>{point.longitude}</td>
              <td>{point.postal_code}</td>
              <td>{point.time_zone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
