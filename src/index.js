import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from "./Store.js"

const root = createRoot(document.getElementById('root'));
<Provider store={store}>
root.render(<App />);
</Provider>