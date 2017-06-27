//-----------  Imports  -----------//

import { configure } from '@storybook/react'

//-----------  Confirgutation  -----------//

function loadStories(){
  require('./stories')
}

configure(loadStories, module)
