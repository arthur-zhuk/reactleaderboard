import React, { Component } from 'react';
import TableRows, { RECENT_URL, ALLTIME_URL } from './table_rows';
import axios from 'axios';

// see a table of campers who've earned the most brownie points in the past 30 days
// see how many brownie points they earned total and in the past 30 days
// toggle between sorting the list by how many brownie points you've earned total
class LeaderBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.handleRecClick = this.handleRecClick.bind(this);
    this.handleAllClick = this.handleAllClick.bind(this);
  }

  componentDidMount() {
    this.fetchRecent();
  }

  fetchRecent() {
    return axios.get(`${RECENT_URL}`).then((res) => {
      this.setState({ data: res.data });
    });
  }

  handleRecClick() {
    return axios.get(`${RECENT_URL}`).then((res) => {
      this.setState({ data: res.data });
    });
  }

  handleAllClick() {
    return axios.get(`${ALLTIME_URL}`).then((res) => {
      this.setState({ data: res.data });
    });
  }
  
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Camper Leaderboard</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Camper Name</th>
                <th onClick={this.handleRecClick}>Points: Past 30 days</th>
                <th onClick={this.handleAllClick}>Points: All Time</th>
              </tr>
            </thead>
              {/* There should be a component here. The component will pull data from json and determine how many <tr>s to create. It will have 4 <tds> */}
            <TableRows leadData={this.state.data}/>
          </table>
        </div>
      </div>
    );
  }
}

export default LeaderBoard;
