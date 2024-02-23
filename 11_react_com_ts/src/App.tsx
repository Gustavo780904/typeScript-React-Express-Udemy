import React, { createContext } from 'react';
// 4 - Importando componentes
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';
// 10 - Context
import Context from './components/Context';

// 8 - type
type textOrNull = string | null;
type fixed = "isso" | "aquilo"

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}
export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variáveis
  const name: string = "Gustavo";
  const age: number = 45;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`
  }
  // 8 - continuacao 8
  const myText: textOrNull = "Tem algum texto"
  let mySecondText: textOrNull = null;
  // mySecondText = "Opa"
  const testandoFixed: fixed = "isso"

  // 9 - continuação
  const contextValue: IAppContext = {
    language: "Typescript",
    framework: "Express",
    projects: 5
  }

  return (

    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com react</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
            <h3>{userGreeting(name)}</h3>
          </div>
        )}
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Desestruturação de Porps"
          content="Isso é novo pra mim"
          commentsQts={4}
          tags={["dev", "novo", "restruturar", "recomeçar"]}
          category={Category.TS}
        />
        <Destructuring
          title="Mais um post"
          content="reaproveitamento de compoentes"
          commentsQts={5}
          tags={["typescript", "aprender", "nuncaétarde"]}
          category={Category.JV}
        />
        <State />
        {myText && <p>{myText}</p>}
        {mySecondText ? <p>{mySecondText}</p> : <p>Não tem texto na variavel</p>}
      <Context/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
