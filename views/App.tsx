import { React } from '../deps.ts';
import NavBar from './components/NavBar.tsx'
import MainContainer from './components/MainContainer.tsx'

// Typescript demands that we define the typing for each JSX element,
// so this global interface defines the 'any' typing for whatever elements we may need
declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      img: any;
      input: any;
      div: any;
      h1: any;
      p: any;
      header: any;
      footer: any;
      a: any;
    }
  }
}

const App = () => {
  const [page, setPage] = (React as any).useState("home")
    return (
      <div id="app">
        <NavBar setPage={setPage}/>
        <MainContainer page={page} />
      </div>
    );
};

export default App;
