import { cpSync } from 'fs'
import { parse, join } from 'path'
import Fontmin from 'fontmin' // Alternative: fonteditor-core

const fontmin = new Fontmin().src('*/*.otf').dest('dist')

fontmin.run(function (error, files) {
  if (error) {
    throw error
  }

  files.forEach(({ path }) => {
    const { name } = parse(path)

    if (path.endsWith('.woff2')) {
      cpSync(path, join(process.cwd(), name, `${name}.woff2`))
    }
  })
})
