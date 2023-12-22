# tailwindUI

react ui library with tailwindcss

# install

```shell
pnpm i @onekstar/tailwind-ui
```
install tailwindcss
https://tailwindcss.com/docs/installation/framework-guides

# config
```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ...
    // add this line
    "./node_modules/@onekstar/tailwind-ui/index.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

# usage

```tsx
import { Button } from "@onekstar/tailwind-ui";

export default () => <Button>hello</Button>
```