# metica

Rounded sans-serif font.

## React JSX (Vite)

```jsx
import metica from 'metica'

const meticaFont = `@font-face {
  font-family: "metica";
  src: url("${metica}") format("woff2");
}`

ReactDOM.createRoot(document.body).render(
  <>
    <style>{meticaFont}</style>
    <App />
  </>
)
```

Alternatively, the `metica/css` import can be used with pre-generated style tag content that includes the font in woff2 and otf.

```jsx
import meticaStyle from 'metica/style'

const Head = <style>{meticaStyle}</style>
```

## CSS Modules (Vite)

```css
/* src/index.css */
@font-face {
  font-family: 'metica';
  src: url('metica') format('woff2');
}

h1 {
  font-family: metica, sans-serif;
}
```

## Next.js

With the `next/font` helper Next.js offers a convenient way to load local fonts. In order for the build to load the font the path has to be specified as a string with a path relative to the current file.

```js
import localFont from 'next/font/local'

const myFont = localFont({ src: '../node_modules/metica/metica.woff2' })

const MyPage = <main className={myFont.className}>Custom Font</main>
```
