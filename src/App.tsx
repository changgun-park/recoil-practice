import { RecoilRoot } from "recoil";
import CharacterCounter from "./CharacterCounter";
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
    </RecoilRoot>
  );
}

export default App;
