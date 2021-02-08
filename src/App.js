import logo from './logo.svg';
import './App.css';

import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Button
          className="btn-icon btn-3 ml-1"
          color="primary"
          type="button"
      >
                    <span className="btn-inner--icon mr-1">
                      <i className="ni ni-bag-17" />
                    </span>
        <span className="btn-inner--text">With icon</span>
      </Button>
    </div>
  );
}

export default App;
