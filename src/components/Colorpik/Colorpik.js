//-----------  Imports  -----------//

import * as Component      from './styles'

import tinycolor           from 'tinycolor2'

import React               from 'react'
import PropTypes           from 'prop-types'

import ColorInput          from 'components/ColorInput'
import ColorPopup          from 'components/ColorPopup'
import ColorPreview        from 'components/ColorPreview'

import { validColorProp,
         inputPropsShape,
         popupPropsShape } from 'utilities/props'

//-----------  Component  -----------//

class Colorpik extends React.Component {

  state = {
    isOpen       : this.props.open,
    currentColor : this.props.color && tinycolor(this.props.color)
  }

  //-----------  Event Handlers  -----------//

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  updateColor = (value) => {
    if (value && tinycolor(value).isValid())
      this.setState({ currentColor: tinycolor(value) })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { open, color, inputProps, popupProps, ...props } = this.props
    const { isOpen, currentColor } = this.state

    return (
      <Component.Colorpik { ...props } onClick={this.toggleOpen}>
        <Component.Input>
          <ColorPreview color={currentColor} />
          <Component.Prefix>#</Component.Prefix>
          <ColorInput onChange={this.updateColor} { ...inputProps } />
          <Component.Icon open={isOpen}>></Component.Icon>
        </Component.Input>

        <ColorPopup { ...popupProps } />
      </Component.Colorpik>
    )
  }
}

//-----------  Name & Props  -----------//

Colorpik.displayName = 'mmColorpik'

Colorpik.propTypes = {
  color      : validColorProp,
  colorType  : PropTypes.oneOf(['hex']),
  popupProps : popupPropsShape,
  inputProps : inputPropsShape,
  open       : PropTypes.bool,
  placement  : PropTypes.oneOf(['left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
}

Colorpik.defaultProps = {
  color      : null,
  colorType  : 'hex',
  open       : false,
  popupProps : {},
  inputProps : {},
  placement  : 'bottomLeft',
}

//-----------  Export  -----------//

export default Colorpik
