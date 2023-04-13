import Button from './component/Button';

import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="buttons">
                <Button size="large" color="gray" onClick={() => console.log('클릭됐다!')}>BUTTON</Button>
                <Button onClick={() => console.log('클릭됐다!')}>BUTTON</Button>
                <Button size="small" color="pink" onClick={() => console.log('클릭됐다!')}>BUTTON</Button>
            </div>
            <div className="buttons">
                <Button size="large" color="gray">BUTTON</Button>
                <Button>BUTTON</Button>
                <Button size="small" color="pink">BUTTON</Button>
            </div>
            <div className="buttons">
                <Button size="large" color="gray"outline>BUTTON</Button>
                <Button outline>BUTTON</Button>
                <Button size="small" color="pink" outline>BUTTON</Button>
            </div>
            <div className="buttons">
                <Button size="large" color="gray" fullWidth>BUTTON</Button>
                <Button fullWidth>BUTTON</Button>
                <Button size="small" color="pink" fullWidth>BUTTON</Button>
            </div>
            <div className="buttons">
                <Button size="large" color="gray"outline fullWidth>BUTTON</Button>
                <Button outline fullWidth>BUTTON</Button>
                <Button size="small" color="pink" outline fullWidth>BUTTON</Button>
            </div>
        </div>
    );
}

export default App;
