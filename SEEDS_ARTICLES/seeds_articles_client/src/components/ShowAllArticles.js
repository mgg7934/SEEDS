// JavaScript source code
import React, { Component } from "react";
import Table from "./Table.js";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

export default class ShowAllArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theTableData: [{}],
      author:'',
      year:''
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/articles")
      .then((res) => {
        this.setState({
          theTableData: res.data,
        });
      })
      .catch((err) => {
        console.log("Error when displaying");
      });
  }
  handleSearchChange=(e,filter)=>{
   
  }
search=()=>{
    axios.get('http://localhost:8082/api/articles/filter?author='+this.state.author+'&year='+this.state.year, {
    
    })
    .then( (res)=> {
      console.log(res.data.articles);
      this.setState({ theTableData: res.data})
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });  
}

  handleSearchChangeA=(e)=>{
     this.setState({author:e.target.value}, () => {
        this.search();
    })
  

  }

  handleSearchChangeY=(e)=>{
    
    this.setState({year:e.target.value}, () => {
        this.search();
    })
       
    
   
   
}

  render() {
    return (
      <div className="App">
        SEEDS DATABASE
        <br /> Articles Table
        <div className="search-area">
          <label className="seach-label">Seach</label>
          <input
            className="search"
            placeholder="Search by Author"
            value={this.state.author}
            onChange={(e) => {
              this.handleSearchChangeA(e);
            }}
          />
            <input
            className="search"
            placeholder="Search year"
            value={this.state.year}
            onChange={(e) => {
              this.handleSearchChangeY(e);
            }}
          />
        </div>
        <Table data={this.state.theTableData} />
      </div>
    );
  }
}

Link.render(<ShowAllArticles />, document.getElementById("app"));
