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

console.log('Generating types...')

const fonts = ['metica', 'monua', 'tobua']
const formats = ['woff2', 'otf', 'ttf', 'woff']
const typeScriptModule = (exportName, format) =>
  `declare module '${exportName}' {
  const ${format}: string
  export default ${format}
}`

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
})
