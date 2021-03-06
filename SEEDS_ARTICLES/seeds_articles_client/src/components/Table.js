// JavaScript source code
// CODE WAS MADE THROUGH HELP OF SEVERAL STACKOVERFLOW THREADS AS WELL AS HELP FROM OTHER STUDENTS
// Code was not specifcally written on my own @Sanjeel Nath
import React from 'react';

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }

    getKeys = function () {
        if (this.props.data.length > 0) {
            return Object.keys(this.props.data[0]);
        }

    }

    getHeader = function () {
        var keys = this.getKeys();
        if (keys) {
            return keys.map((key, index) => {
                return <th onClick={this.sort.bind(this, key)} key={key}>{key.toUpperCase()}</th>
            })
        }

    }
    sort(k) {
        this.props.sortmethod(k)
    }
    getRowsData = function () {
        var items = this.props.data;
        var keys = this.getKeys();
        return items.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
        })
    }

    render() {
        return (
            <div>
                <table class="tbl" width="100%">
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
        return <td key={props.data[key] + index}>{props.data[key]}</td>
    })
}