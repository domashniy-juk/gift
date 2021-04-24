import React from 'react';
import ReactDom from 'react-dom';
import ModelViewer from 'react-model-viewer';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
const modelPath = './assets/ffbe3891-e426-42ff-903e-10d95b773783.gltf';

const App = () => {
    console.log(1)
    return (
        <h1>
            Hi from a react app
            <ModelViewer type="gtlf" src={modelPath} />
        </h1>
    )
}

ReactDom.render(<App />, mainElement);