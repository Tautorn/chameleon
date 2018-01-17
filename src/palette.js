import React, { Component } from 'react'
import styled from 'styled-components'


const StyledPalette = styled.div`
  color: white;
  border: 1px solid black;
  height: 300px;
  width: 300px;
  border-radius: 50%;
`

class Palette extends Component {

  render() {
    return (
      <StyledPalette />
    )
  }
}

export default Palette