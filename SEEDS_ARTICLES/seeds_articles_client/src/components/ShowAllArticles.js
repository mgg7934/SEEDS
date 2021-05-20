// JavaScript source code
import React, { Component } from 'react';
import Table from './Table.js';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

export default class ShowAllArticles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theTableData: [
                {}
            ],
        }
    }


    componentDidMount() {
        axios
            .get('http://localhost:8082/api/articles')
            .then(res => {
                this.setState({
                    theTableData: res.data
                })
            })
            .catch(err => {
                console.log('Error when displaying');
            })
    };

    render() {
        return (
            <div className="App">
                SEEDS DATABASE
            <br /> Articles Table
            <Table data={this.state.theTableData} />
            </div>
        );
    }
}

Link.render(
    <ShowAllArticles />, document.getElementById("app"));

