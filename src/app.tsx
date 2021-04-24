import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import ModelViewer from 'react-model-viewer';
import { Service } from './service';
import { Button } from 'react-bootstrap';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
const modelPath = './assets/ffbe3891-e426-42ff-903e-10d95b773783.gltf';

const App = () => {
    const service = new Service();
    useEffect(() => {
        service.getQuote().then(console.log)
    }, [])
    const click = () => {
        service.getQuote().then(console.log)
    }
    return (
        <h1>
            Hi from a react app
            <Button onClick={click}>111</Button>
            {/* <ModelViewer type="gtlf" src={modelPath} /> */}
        </h1>
    )
}

ReactDom.render(<App />, mainElement);