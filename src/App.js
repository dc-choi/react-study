import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

function App() {
    const result = [
        { id: 1, name: 'React' },
        { id: 2, name: 'Vue' },
        { id: 3, name: 'Node' },
    ];

    return (
        <div>
            <Header title='React' />
            <Body content='is so funny!!' result={result} />
            <Footer content='but i wait backend developer' />
        </div>
    );
}

export default App;
