//-----------  Imports  -----------//

import styled from 'styled-components'

//-----------  Styles  ----------- */

export const Colorpik = styled.div``

export const Input = styled.div`
  border        : 1px solid rgba(0,0,0,0.15);
  box-shadow    : 1px 1px 2px rgba(0,0,0,0.05);
  border-radius : 5px;
  cursor        : pointer;
  display       : inline-block;
  padding       : 0.33em 0.45em 0.33em;
`

export const Prefix = styled.small`
  color  : lightgray;
  margin : 0 0.33em 0 0.67em;
`

export const Icon = styled.i`
  color       : gray;
  display     : inline-block;
  font-size   : 0.8em;
  font-style  : normal;
  font-weight : bold;
  margin-left : 0.5em;
  transform   : rotate(${p => p.open ? '-90deg' : '90deg'});
  transition  : all 0.15s ease-in-out;
`
