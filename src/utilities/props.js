//-----------  Imports  -----------//

import tinycolor from 'tinycolor2'
import PropTypes from 'prop-types'

//-----------  Prop Type Utilities  -----------//

export const inputPropsShape = PropTypes.shape({
  className   : PropTypes.string,
  guide       : PropTypes.bool,
  id          : PropTypes.string,
  placeholder : PropTypes.string,
  styles      : PropTypes.object,
  type        : PropTypes.oneOf(['text', 'tel', 'url', 'password', 'search']),
})

export const popupPropsShape = PropTypes.shape({
  className : PropTypes.string,
  id        : PropTypes.string,
  styles    : PropTypes.object,
})

export const validColorProp = (props, propName, componentName) => {
  if (!tinycolor(props[propName]).isValid)
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`)
}
