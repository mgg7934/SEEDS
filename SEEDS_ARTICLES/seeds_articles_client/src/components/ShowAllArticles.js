// Show all articles
// CODE WAS MADE THROUGH HELP OF SEVERAL STACKOVERFLOW THREADS AS WELL AS HELP FROM OTHER STUDENTS
// Code was not specifcally written on my own @Sanjeel Nath
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
      author: "",
      year: "",
      sort_key:""
    };
  }

  componentDidMount() {
    axios
      .get("https://seeds-articles.herokuapp.com/api/articles")
      .then((res) => {
        console.log(res.data);
        this.setState({
          theTableData: res.data,
        });
      })
      .catch((err) => {
        console.log("Error when displaying");
      });
  }
  handleSearchChange = (e, filter) => {};
  search = () => {
    axios
      .get(
        "https://seeds-articles.herokuapp.com/api/articles/filter?author=" +
          this.state.author +
          "&year=" +
          this.state.year,
        {}
      )
      .then((res) => {
        console.log(res.data.articles);
        this.setState({ theTableData: res.data });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  handleSearchChangeA = (e) => {
    this.setState({ author: e.target.value }, () => {
      this.search();
    });
  };

  handleSearchChangeY = (e) => {
    this.setState({ year: e.target.value }, () => {
      this.search();
    });
  };

  sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  sort = (k) => {
    let arr = this.state.theTableData;
    let newarr=[]
    if(this.state.sort_key==k){
     newarr = this.sortByKey(arr, k).reverse();
     this.setState({sort_key:'' });
    }
    else{
       newarr = this.sortByKey(arr, k);
       this.setState({sort_key:k });
    }
   
    this.setState({ theTableData: newarr });
  };
  render() {
    return (
      <div className="App">
        SEEDS DATABASE
        <br /> Articles Table
        <div className="search-area">
          <label className="seach-label">Search</label>
          <input
            className="search"
            placeholder="Search by SE Practice"
            value={this.state.author}
            onChange={(e) => {
              this.handleSearchChangeA(e);
            }}
          />
          <input
            className="search"
            placeholder="Search by Strength of claim"
            value={this.state.year}
            onChange={(e) => {
              this.handleSearchChangeY(e);
            }}
          />
        </div>
        <Table sortmethod={this.sort} data={this.state.theTableData} />
      </div>
    );
  }
}

Link.render(<ShowAllArticles />, document.getElementById("app"));
