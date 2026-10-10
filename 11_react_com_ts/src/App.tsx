import React, {createContext} from 'react';

// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';

// 6 - useState
import State from './components/State';

// 10 - utilizando context
import Context from './components/Context';

// 8 - type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {

 // 1 - variáveis
  const nome: string = "Sérgio";
  const age: number = 45;
  const isWorking: boolean = true;

  // 2 - funções
  function userGreeting(name: string): string {
    return `Olá, ${name}!`;
  }

  // 8 - type
  const myText: textOrNull = "Tem algum texto aqui!";
  let mySecondText: textOrNull = null;
  // mySecondText = "Opa!";

  const testandoFixed: fixed = "Isso";

  // 9 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>Type Script com React!</h1>
      <h2>Nome: {nome}</h2>
      <p>Idade: {age}</p>
      {isWorking ? (
        <p>Está trabalhando!</p>
      ) : (
        <p>Não está trabalhando!</p>
      )}
      <h3>{userGreeting(nome)}</h3>
      <FirstComponent />
      <SecondComponent name="Sérgio teste Props!" />
      <Destructuring
        title="Primeiro Post"
        content="Algum conteúdo"
        commentQty={10}
        tags={['ts ', 'js']}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo Post"
        content="Mais outro conteúdo"
        commentQty={5}
        tags={['python']}
        category={Category.P}
      />
      <State />
      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na segunda variável</p>}
      {testandoFixed === "Isso"  ? (
        <p>É isso mesmo!</p>
      ) : testandoFixed === "Ou" ? (
        <p>É ou!</p>
      ) : (
        <p>É aquilo!</p>
        )}
      <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
