import styled, { createGlobalStyle } from "styled-components";
import { TiThMenu } from "react-icons/ti";
import { Login } from "./Components/Login/Login";

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

// Host para main onde os componentes da ião ficar
const TextoH1 = styled.h1`
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: darkblue;
  font-weight: bold;

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
        <Login />
        </Navegacao>
      </Header>

      <Main>
        <TextoH1>Bem-vindo ao Meu Site!</TextoH1>
        <p>Aqui vai o conteúdo da página...</p>
        <h2>Aqui vai um sub-Titulo</h2>
      </Main>
    </>
  );
}

export default App;
