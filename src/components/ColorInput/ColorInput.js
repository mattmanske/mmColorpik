//-----------  Imports  -----------//

import * as Component      from './styles'

import React               from 'react'
import PropTypes           from 'prop-types'

import { hexMask }         from 'utilities/masks'
import { inputPropsShape } from 'utilities/props'

//-----------  Component  -----------//

const ColorInput = ({ value, onChange, ...props }) => {

  return (
    <Component.ColorInput
      mask={hexMask}
      onChange={evt => onChange(evt.target.value)}
      { ...props }
    />
  )
}

//-----------  Name & Props  -----------//

ColorInput.displayName = 'mmColorpikInput'

ColorInput.propTypes = {
  onChange : PropTypes.func.isRequired,
  inputPropsShape
}

ColorInput.defaultProps = {
  guide : false,
  type  : 'text',
}

//-----------  Export  -----------//

export default ColorInput
