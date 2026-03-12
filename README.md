# `@rezics/icons`

Tree-shakeable React icon library generated from SVG assets in `src/`.

## Usage

### Import all icons from the root

```tsx
import { GithubIcon, GoogleIcon } from "@rezics/icons";
```

### Import by category

```tsx
import { GithubIcon, GoogleIcon } from "@rezics/icons/brand";
```

### Import a single component directly

```tsx
import GithubIcon from "@rezics/icons/components/brand/GithubIcon";
```

### Use in JSX

```tsx
export function Example() {
  return (
    <div>
      <GithubIcon />
      <GoogleIcon width={32} height={32} />
    </div>
  );
}
```

## Development

1. Put raw SVG files in category folders under `src/` (e.g. `src/brand/`, `src/payment/`).
2. Run `bun run generate` to create React components and barrel index files.
3. Run `bun run build` to output the publishable package into `dist/`.

## Publish

```bash
npm publish
```
