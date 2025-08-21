import styled, { createGlobalStyle } from "styled-components";
import { TiThMenu } from "react-icons/ti";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: aliceblue;
    height: 200vh;
    margin: 0;
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
`;

const Navegacao = styled.nav`
  background-color: purple;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  color: white;
  font-size: 30px;
`;

const Logo = styled.div`
  font-size: 35px;
  display: flex;
  align-items: center;
`;

const ItemMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  li {
    padding: 10px 15px;
    border-radius: 20px;
    transition: 0.3s;
    cursor: pointer;
  }

  li:hover {
    background-color: white;
    color: black;
    font-weight: 500;
  }
`;

const Main = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Navegacao>
          <Logo>
            <TiThMenu />
            &nbsp; Meu Site
          </Logo>
          <ItemMenu>
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ItemMenu>
        </Navegacao>
      </Header>

      <Main>
        <h1>Bem-vindo ao Meu Site!</h1>
        <p>Aqui vai o conteúdo da página...</p>
      </Main>
    </>
  );
}

export default App;
