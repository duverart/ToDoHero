import { AppUI } from "./AppUI.jsx";
import { TodoProvide } from "./TodosContext.jsx";


function App(
) {




return(
  <TodoProvide>
    <AppUI/>
  </TodoProvide>
)


}

export default App;
