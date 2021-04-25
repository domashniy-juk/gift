import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { OBJModel } from 'react-3d-viewer'
import model from '../assets/uploads_files_1916312_tulips_alutaroma_free.obj';
import { Service } from './service';
import { Button } from 'react-bootstrap';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
const modelPath = '../assets/uploads_files_1916312_tulips_alutaroma_free.obj';

const App = () => {
    // const service = new Service();
    // useEffect(() => {
    //     service.getQuote().then(console.log)
    // }, [])
    // const click = () => {
    //     service.getQuote().then(console.log)
    // }
    return (
        <h1>
            {/* Hi from a react app
            <Button onClick={click}>111</Button> */}
            <OBJModel src={model} texPath=""/>
        </h1>
    )
}

ReactDom.render(<App />, mainElement);