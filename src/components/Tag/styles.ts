import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  width: 121px;
  height: 26px;
  top: 456px;
  left: 437px;
  gap: 0px;
  opacity: 0px;
  border-radius: 8px;
  display: inline-block;

  color: ${cores.creme};

  width: 113px;
  height: 14px;
  top: 462px;
  left: 441px;
  gap: 0px;
  opacity: 0px;

  font-family: Roboto;
  font-size: ${(props) => (props.size === 'small' ? '9px' : '7px')};
  padding: ${(props) => (props.size === 'small' ? '14px 12px' : '12px 10px')};
  font-weight: 700;
  line-height: 14.06px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  background-color: ${cores.salmao};
`

/*
background-color: ${cores.salmao};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  display: inline-block;
  */
