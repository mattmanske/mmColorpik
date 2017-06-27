//-----------  Imports  -----------//

import styled    from 'styled-components'

import tinycolor from 'tinycolor2'

//-----------  Styles  ----------- */

export const ColorPreview = styled.span`
  background     : ${p => tinycolor(p.color).toString('hex')};
  border-radius  : 3px;
  display        : inline-block;
  height         : 1.25em;
  transition     : background 0.25s ease-in-out;
  vertical-align : middle;
  width          : 1.2em;
`
