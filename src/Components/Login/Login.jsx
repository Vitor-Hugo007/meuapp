// Importa os hooks do React:
// - useState: cria e gerencia estados locais do componente
// - useEffect: executa efeitos colaterais em momentos específicos do ciclo de vida
import { useEffect, useState } from "react";

// Importa a função 'styled' para criar componentes estilizados com CSS-in-JS
import styled from "styled-components";

// Cria um componente de botão estilizado usando styled-components.
// A sintaxe é CSS dentro de uma template string.
const Button = styled.button`
  /* Cor de fundo padrão do botão */
  background-color: white;

  /* Cor do texto do botão */
  color: purple;

  /* Remove a borda padrão do botão HTML */
  border: none;

  /* Espaçamento interno: vertical 8px, horizontal 18px */
  padding: 8px 18px;

  /* Cantos arredondados (pílula) */
  border-radius: 20px;

  /* Tamanho da fonte do texto do botão */
  font-size: 16px;

  /* Espessura do texto (requer que a família de fontes tenha esse weight) */
  font-weight: 500;

  /* Cursor em formato de mão ao passar por cima (indicando que é clicável) */
  cursor: pointer;

  /* Animação suave ao mudar propriedades estilizadas (como background e color) */
  transition: 0.3s;

  /* Pseudo-classe :hover — estilos aplicados quando o mouse está sobre o botão */
  &:hover {
    /* Altera a cor de fundo no hover */
    background-color: #d8b9ff;

    /* Altera a cor do texto no hover para melhorar contraste */
    color: black;
  }
`;

// Exporta um componente funcional chamado Login (export nomeado)
export const Login = () => {
  // Declara um estado booleano 'isLoggedIn' com valor inicial 'false'.
  // 'setIsLoggedIn' é a função para atualizar esse estado.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect: executa um efeito colateral após a montagem do componente.
  // Objetivo: ler do localStorage se já existe uma sessão de login persistida.
  // IMPORTANTE: o array de dependências vazio ([]) faz com que rode apenas uma vez (montagem).
  useEffect(() => {
    // Lê o valor salvo em localStorage com a chave "login".
    // localStorage sempre armazena strings; aqui comparamos estritamente com "true".
    const storedLogin = localStorage.getItem("login") === "true";

    // Atualiza o estado com o valor lido (true/false).
    setIsLoggedIn(storedLogin);

    // Mensagens apenas para depuração no console do navegador.
    if (storedLogin) {
      console.log("Usuário logado");
    } else {
      console.log("Usuário não logado");
    }
  }, []); // Sem dependências => executa somente na primeira renderização.

  // Handler chamado quando o usuário clica em "Login".
  // Atualiza o estado para 'true' e persiste essa informação no localStorage.
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("login", "true");
    console.log("Usuário logado com sucesso");
  };

  // Handler chamado quando o usuário clica em "Logout".
  // Atualiza o estado para 'false' e remove a flag de login do localStorage.
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("login");
    console.log("Usuário deslogado com sucesso");
  };

  // JSX retornado pelo componente.
  // Renderiza condicionalmente o botão: se 'isLoggedIn' for true, mostra "Logout",
  // caso contrário, mostra "Login". Cada um com seu respectivo onClick handler.
  return (
    <div>
      {isLoggedIn ? (
        // Quando logado: botão realiza logout
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        // Quando deslogado: botão realiza login
        <Button onClick={handleLogin}>Login</Button>
      )}
    </div>
  );
};
// Fim do componente Login