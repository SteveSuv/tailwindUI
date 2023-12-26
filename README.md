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
    //...
    "./node_modules/@onekstar/tailwind-ui/index.js", // add this line
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

export default () => <Button>hello</Button>;
```
