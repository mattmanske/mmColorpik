//-----------  Imports  -----------//

import React         from 'react'

import { storiesOf } from '@storybook/react'
import { action }    from '@storybook/addon-actions'
import { linkTo }    from '@storybook/addon-links'

import Colorpik      from 'components/Colorpik'

//-----------  Stories  -----------//

storiesOf('Colorpik', module)
  .add('Default', () => <Colorpik color={'#90fa93'} />)
