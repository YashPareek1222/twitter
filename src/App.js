import './App.css';
import Feed from './Feed';
import Sidebar from './SideBar';
import Widgets from './Widgets';

function App() {
  return (
    //BEM
    <div className="app">

      {/* Sidebar */}
      <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* Widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
