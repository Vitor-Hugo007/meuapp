import styled from "styled-components";
import Barra from "./Components/Barra/Barra";

const Header = styled.header`
  background-color: purple;
  height: 200px;
`;

const MainContainer = styled.div`
  height: 100px;
`;

function App() {
  return (
    <Header>
      <MainContainer>   
        <Barra />
      </MainContainer>
    </Header>
  );
}

export default App;
