import React from 'react'
import styled from 'styled-components'

const Designed = () => {
  return (
      <Container>
          <Wrapper>
              <Top><h1>Designed to be Accurate for Everyone</h1></Top>
          </Wrapper>
    </Container>
  )
}

export default Designed
const Top = styled.div`
    h1{
        color: #00214F;
    }
`
const Wrapper = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
`