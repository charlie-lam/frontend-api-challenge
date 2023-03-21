const ChitterView = require('./chitterView')
const ChitterModel = require('./chitterModel')
const ChiiterClient = require('./chitterClient')

const model = new ChitterModel()
const view = new ChitterView(model)

view.displayPeeps()