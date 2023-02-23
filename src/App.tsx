import { RecoilRoot } from "recoil";
import CharacterCounter from "./CharacterCounter";
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
    </RecoilRoot>
  );
}

export default App;
