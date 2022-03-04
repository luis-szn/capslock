import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { TextBox } from "./components/TextBox";


export function App() {
  
  return (
    <div className="App">
        <Header />
        <TextBox />
        <GlobalStyle />
    </div>
  
  );
}

