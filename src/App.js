import './App.css';
import { useState } from 'react';
import Rate from './components/Rate';
import Result from './components/Result';

function App() {
  const [activeRate, setActiveRate] = useState(null);
  const [submit, setSubmit] = useState(false);
  let renderResult;
  if (activeRate || !activeRate) {
    renderResult = <Rate activeRate={activeRate} setActiveRate={setActiveRate} setSubmit={setSubmit} />
    if (activeRate && submit) {
      renderResult = <Result activeRate={activeRate} />
    }
  }

  return (
    <div className='App'>   
      {renderResult}
    </div>
  );
}

export default App;
