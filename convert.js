import { cpSync, mkdirSync, writeFileSync } from 'fs'
import { parse, join, extname } from 'path'
import Fontmin from 'fontmin' // Alternative: fonteditor-core

console.log('Converting OTF to TTF, WOFF and WOFF2...')

const fontmin = new Fontmin().src('*/*.otf').dest('dist')

fontmin.run(function (error, files) {
  if (error) {
    throw error
  }

  files.forEach(({ path }) => {
    const { name } = parse(path)
    const extension = extname(path)

    if (extension === '.woff2' || extension === '.woff' || extension === '.ttf') {
      cpSync(path, join(process.cwd(), name, name + extension))
    }
  })
})

console.log('Generating types and CSS...')

const fonts = ['metica', 'monua', 'tobua']
const formats = ['woff2', 'otf', 'ttf', 'woff']
const typeScriptModule = (exportName, format) =>
  `declare module '${exportName}' {
  const ${format}: string
  export default ${format}
}`

const cssStyle = (name) => `import ${name} from '${name}'
import ${name}Otf from '${name}/otf'

export default \`@font-face {
  font-family: '${name}';
  src: url('\$\{${name}\}') format('woff2'), url('\$\{${name}Otf\}') format('opentype');
}\``

fonts.forEach((fontName) => {
  // Ensure directory exists.
  mkdirSync(join(process.cwd(), fontName, 'types'), { recursive: true })

  formats.forEach((extensionName) => {
    const moduleTemplate = typeScriptModule(
      extensionName === 'woff2' ? fontName : `${fontName}/${extensionName}`,
      extensionName
    )
    writeFileSync(
      join(
        process.cwd(),
        fontName,
        'types',
        `${extensionName === 'woff2' ? fontName : `${fontName}-${extensionName}`}.d.ts`
      ),
      moduleTemplate
    )
  })

  // One CSS file for each font.
  const styleTemplate = cssStyle(fontName)

  writeFileSync(join(process.cwd(), fontName, `${fontName}.js`), styleTemplate)

  writeFileSync(
    join(process.cwd(), fontName, 'types', `${fontName}-style.d.ts`),
    `declare const _default: string;
export default _default;`
  )
})
