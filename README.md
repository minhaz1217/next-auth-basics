### How to start a basic project

`npx create-next-app@latest`

Add primereact
`npm install primereact primeicons`

Add these in the `layout.tsx` just under the `import "./globals.css";` 
```
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
```


Add this in global.css
remove these sections
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

and add these
```
@layer tailwind-base, primereact, tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}
```

Start the app
`npm run dev`