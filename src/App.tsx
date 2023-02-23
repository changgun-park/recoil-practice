import { RecoilRoot } from "recoil";
import CharacterCounter from "./CharacterCounter";
import Exchange from "./Exchange";
import { AComponent, BComponent } from "./recoil/sample";
import TodoList from "./TodoList";

function App() {
  return (
    <RecoilRoot>
      <section>
        <h2>Character Counter</h2>
        <CharacterCounter />
      </section>
      <br />
      <section>
        <h2>TodoList</h2>
        <TodoList />
      </section>
      <br />
      <section>
        <h2>Atom Family Example</h2>
        <AComponent />
        <BComponent />
      </section>
      <section>
        <h2>Exchange</h2>
        <Exchange />
      </section>
    </RecoilRoot>
  );
}

export default App;
