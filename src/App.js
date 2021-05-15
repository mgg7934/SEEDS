
import React from 'react';
import './App.css';
import Table from './components/Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //sample data
      data: [{ title: "abc", author: "Sample Author", year: 2021, se_practice: "Sample Se Practice", claim: "sample Claim text", stength: 'sample Strength text' },
      { title: "abc", author: "Sample Author", year: 2021, se_practice: "Sample Se Practice", claim: "sample Claim text", stength: 'sample Strength text' },
      { title: "abc", author: "Sample Author", year: 2021, se_practice: "Sample Se Practice", claim: "sample Claim text", stength: 'sample Strength text' },
      { title: "abc", author: "Sample Author", year: 2021, se_practice: "Sample Se Practice", claim: "sample Claim text", stength: 'sample Strength text' },
      { title: "abc", author: "Sample Author", year: 2021, se_practice: "Sample Se Practice", claim: "sample Claim text", stength: 'sample Strength text' },
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {/* call created component and pass data to component */}
        <Table data={this.state.data} />
      </div>
    );
  }

}

export default App;
