import React, {Component} from 'react';
import './App.css';
import SortableTable from "./components/SortableTable";

class App extends Component {
    render() {
        return (
            <div className="App">
                <SortableTable/>
            </div>
        );
    }
}

export default App;
