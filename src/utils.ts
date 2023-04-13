export type Point = {
  id: string;
  address_country: string;
  address_country_code: string;
  address_locality: string;
  address_region: string;
  ip_address: string;
  latitude: number;
  longitude: number;
  postal_code: string;
  time_zone: string;
};

export const coordinatesToPosition = (
  coordinates: [number, number],
  radius: number
): [number, number, number] => {
  const [lat, long] = coordinates;
  const phi = (lat * Math.PI) / 180;
  const theta = ((long - 180) * Math.PI) / 180;
  const x = -radius * Math.cos(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi);
  const z = radius * Math.cos(phi) * Math.sin(theta);

  return [x, y, z];
};

export const filterPoints = (points: Point[]) => {
  if (points instanceof Array === false) return [];
  const ipHash = {} as Record<string, boolean>;
  return points.filter((point: Point) => {
    if (ipHash[point.ip_address]) return false;
    else {
      ipHash[point.ip_address] = true;
      return true;
    }
  });
};
