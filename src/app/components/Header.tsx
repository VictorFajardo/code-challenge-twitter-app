import site from "../../data/site"
import styled from 'styled-components'

const Wrapper = styled.header`
  margin: 10px;
`
const Title = styled.h1`
  padding: 13px 6px 9px 6px;
  font-size: 19px;
  letter-spacing: -0.3px;
  @media all and (min-width: 860px) {
    padding: 7px 0 0;
    font-size: 17px;
  }
`

const Header = () => {
  const { header: { title } } = site

  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default Header