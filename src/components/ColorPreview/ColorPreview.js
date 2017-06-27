//-----------  Imports  -----------//

import * as Component     from './styles'

import React              from 'react'
import PropTypes          from 'prop-types'

import { validColorProp } from 'utilities/props'

//-----------  Component  -----------//

const ColorPreview = (props) => {

  return (
    <Component.ColorPreview { ...props } />
  )
}

//-----------  Name & Props  -----------//

ColorPreview.displayName = 'mmColorpikPreview'

ColorPreview.propTypes = {
  color: validColorProp,
}

ColorPreview.defaultProps = {
  color: 'white',
}

//-----------  Export  -----------//

export default ColorPreview
