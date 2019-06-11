import Component from '../shared/Component.js';
import Header from '../shared/Header.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        dom.prepend(header);

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <main></main>
    `;
    }
}

export default App;