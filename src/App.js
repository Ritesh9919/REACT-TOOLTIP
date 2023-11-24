
import './styles/App.css';
import ToolTip from './Tooltip';


function App() {
  return (
    <div className="App">
      <div>
        <ToolTip position='top' />
        <ToolTip position='bottom' />
      </div>
      <div>
        <ToolTip position='left' />
        <ToolTip position='right' />
      </div>
    </div>
  );
}

export default App;
