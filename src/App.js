import logo from './logo.svg';
import './App.css';
import HomeRight from './page/homeRight';
import HomeLeft from './page/homeleft';
function App() {
  return (
    <section className="w-screen h-screen flex">
      <HomeLeft />
       <HomeRight /> 
    </section>
  );
}

export default App;