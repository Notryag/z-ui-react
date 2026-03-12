# z-ui-react

## Install

```bash
pnpm add z-ui-react
```

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

`pnpm build` now generates:

- `dist/demo` for the Vite demo app
- `dist/lib` for the consumable component library bundle and type declarations

## Usage

```tsx
import { Button, Progress } from 'z-ui-react';
import 'z-ui-react/style.css';

export default function App() {
  return (
    <>
      <Button type="primary">Primary</Button>
      <Progress percent={60} />
    </>
  );
}
```
