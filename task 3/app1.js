// App.js
import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ productName }) => {
    return (
        <header>
            <h1>{productName}</h1>
        </header>
    );
};

const App = () => {
    const products = ['Product A', 'Product B', 'Product C'];

    return (
        <div>
            {products.map((product, index) => (
                <Header key={index} productName={product} />
            ))}
        </div>
    );
};

// Render the App component
ReactDOM.render(<App />, document.getElementById('root'));
