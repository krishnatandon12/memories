import React from "react";
const arr = [1, 2, 3];

const App = () => {
    return (
        <div>
            <h1>App</h1>
            {arr.map(item => <p>{item}</p>)}
        </div>
    );
}

export default App;