import "./app.css";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Textarea from "./components/Textarea/Textarea";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Textarea />
      <Content />
    </div>
  );
}

export default App;