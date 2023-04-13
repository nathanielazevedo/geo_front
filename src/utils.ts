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

export const filterPoints = (points: any) => {
  const ipHash = {} as any;
  return points.filter((point: any) => {
    if (ipHash[point.ip_address]) return false;
    else {
      ipHash[point.ip_address] = true;
      return true;
    }
  });
};
