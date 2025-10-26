# React Globe Frequency

A simple React component for rendering a 3D globe with points plotted on it.

## Installation

```bash
npm install react-globe-frequency
```

## Usage

```tsx
import { Globe, Point } from 'react-globe-frequency';

const points: Point[] = [
  {
    id: '1',
    latitude: 37.7749,
    longitude: -122.4194,
    country: 'United States',
    country_code: 'US',
    locality: 'San Francisco',
    region: 'California',
    postal_code: '94102',
    time_zone: 'America/Los_Angeles'
    // ip_address is optional
  },
  // Add more points...
];

function App() {
  return (
    <div>
      <Globe 
        points={points} 
        style={{ height: '400px', width: '600px' }}
      />
    </div>
  );
}
```

## Props

- `points`: An array of `Point` objects to display on the globe.
- `setHoveredPoint` (optional): A callback function that receives the hovered point or null.
- `style` (optional): React.CSSProperties object for styling the canvas element.
- `className` (optional): CSS class name for the canvas element.

## Point Type

```ts
interface Point {
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
}
```

## Publishing to npm

This package uses GitHub Actions for automated publishing. To set it up:

1. Create an npm account if you don't have one
2. Generate an access token from npm (Account Settings > Access Tokens)
3. Add the token as a GitHub secret named `NPM_TOKEN` in your repository settings
4. Create a new release on GitHub to trigger the publish workflow

## Dependencies

This package requires React 18+, @react-three/fiber, @react-three/drei, and three.js.