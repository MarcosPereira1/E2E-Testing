import './commands'
import 'cypress-dark'
import 'cypress-iframe'
import 'cypress-mailosaur'
import 'cypress-file-upload'


const { cypressGrep } = require('cypress-grep')
module.exports = (on, config) => {
  on('file:preprocessor', cypressGrep(config))
}