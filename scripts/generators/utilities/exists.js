//-----------  Includes  -----------//

const fs   = require('fs')
const path = require('path')

//-----------  Helpers  -----------//

const components = fs.readdirSync(path.join(__dirname, '../../../src/components'))

//-----------  Exports  -----------//

module.exports = (comp) => {
  return components.indexOf(comp) >= 0
}
