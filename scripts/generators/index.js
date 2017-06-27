//-----------  Includes  -----------//

const fs     = require('fs')
const path   = require('path')

const exists = require('./utilities/exists')

//-----------  Definitions  -----------//

const description = 'Generate a new React component.'

//-----------  Prompts  -----------//

const prompts = [{
  type    : 'list',
  name    : 'type',
  message : 'Select the type of component',
  default : 'Stateless Function',
  choices : () => ['Stateless Function', 'ES6 Class'],
},{
  type     : 'input',
  name     : 'name',
  message  : 'What should it be called?',
  default  : 'Button',
  validate : (value) => {
    if ((/.+/).test(value))
      return exists(value) ? 'A component with this name already exists' : true
    return 'The name is required'
  }
}]

//-----------  Actions  -----------//

const actions = ({ type, name }) => {
  const testTemplate      = './templates/tests.js.hbs'
  const indexTemplate     = './templates/index.js.hbs'
  const styleTemplate     = './templates/styles.js.hbs'
  const componentTemplate = ('Stateless Function' == type)
    ? './templates/function.js.hbs'
    : './templates/class.js.hbs'

  return [{
    // Index File
    type         : 'add',
    path         : '../../src/components/{{properCase name}}/index.js',
    templateFile : indexTemplate,
    abortOnFail  : true,
  },{
    // Component File
    type         : 'add',
    path         : '../../src/components/{{properCase name}}/{{properCase name}}.js',
    templateFile : componentTemplate,
    abortOnFail  : true,
  },{
    // Component Styles
    type         : 'add',
    path         : '../../src/components/{{properCase name}}/tests.js',
    templateFile : testTemplate,
    abortOnFail  : true,
  },{
    // Component Tests
    type         : 'add',
    path         : '../../src/components/{{properCase name}}/styles.js',
    templateFile : styleTemplate,
    abortOnFail  : true,
  }]
}

//-----------  Generator  -----------//

module.exports = (plop) => {
  plop.setGenerator('component', {
    prompts, actions, description, 
  })
}
