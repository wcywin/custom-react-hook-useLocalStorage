import React from 'react';
import { useLocalStorage } from "./useLocalStorage";

const App: React.FC = () => {
    const [state, setState] = useLocalStorage('value')
    return (
    <div>
      <p>Value: { state }</p>
        <button onClick={() => setState(Math.floor(Math.random() * 10000))}>
            Change state!
        </button>
    </div>
    );
}

export default App;
