import styled, { keyframes } from "styled-components"

const P = styled.p`
  font-size: 24px;
  color: red
`
const Content = styled.div`
  padding: 10px 25px;
`
const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background-color: ${props => props.primary ? "red" : "white"} ;
  color: ${props => props.primary ? "white" : "red"} ;
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;

  &:hover {
    box-shadow: 1px 2px 5px rgba(0,0,0,0.3);
  }

  &.secondary {
    background-color: blue;
    border: solid 2px blue;
    color: white;
  }
  
  .info{
    font-size: 28px;
  }
`
const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;

`
const Link = ({ className, ...props }) => {
  return <a className={className} {...props} />
}
const StyleLink = styled(Link)`
  color: blue;
`
const Input = styled.input.attrs(props => ({
  type: "text",
  color: props.color || "red"
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${props => props.color};
`
const Password = styled(Input).attrs({
  type: "password"
})``

const girar = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`
const App = () => {
  return (
    <Content>
      <P>Test</P>
      <Button>Enviar</Button>
      <Button primary >Enviar</Button>
      <Button primary className="secondary" >Enviar <p className="info" >info</p></Button>
      <BlockButton as="a" href="#"  >Enviar</BlockButton>
      <Link>Link</Link>
      <StyleLink>Link</StyleLink>
      <Input />
      <Password />
      <br />
      <Rotar> Estoy girando </Rotar>
    </Content>
  )
}

export default App
