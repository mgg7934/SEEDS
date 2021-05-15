import React from 'react';
class Table extends React.Component {
    constructor(props){
        super(props);       
      }
    render() {
      return ( <table>
      <tr>
        <th>Titles</th>
        <th>Authors</th>
        <th>Year</th>
        <th>SE practice</th>
        <th>Claims</th>
        <th>Strength of evidence</th>
      </tr>
      {
        //   populate table with data passed to this component
        this.props.data.map((item, index) => {
            return (
                <tr key={index+item.name}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.year}</td>
                <td>{item.se_practice}</td>
                <td>{item.claim}</td>
                <td>{item.stength}</td>
              </tr>
            );
        })
      }
      
      
    </table>)
    }
  }
  export default Table