export type Point = {
  id: string;
  country: string;
  country_code: string;
  locality: string;
  region: string;
  ip_address?: string;
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
  const idHash = {} as Record<string, boolean>;
  return points.filter((point: Point) => {
    if (idHash[point.id]) return false;
    else {
      idHash[point.id] = true;
      return true;
    }
  });
};
