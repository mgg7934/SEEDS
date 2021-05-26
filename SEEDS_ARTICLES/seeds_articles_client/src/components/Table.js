// JavaScript source code, this was taught from Several class mates and Stackoverflow threads
// this is not purely my own code @Sanjeel Nath
import React from 'react';
const columns = ["author", "title", "SE Practice", "Strength of claim", "journal", "year", "month", "number", "pages", "DOI"]

export default class Table extends React.Component {


    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }

    //gets columns
    getKeys = function () {
        return columns;
    }

    getHeader = function () {
        var keys = columns;
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }

    getRowsData = function () {
        var items = this.props.data;
        var keys = columns;
        return items.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
        })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.getRowsData()}
                    </tbody>
                </table>
            </div>

        );
    }
}

const RenderRow = (props) => {
    return props.keys.map((key, index) => {
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
}