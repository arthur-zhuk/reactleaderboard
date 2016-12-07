import React, { Component } from 'react';

export const RECENT_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
export const ALLTIME_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

class TableRows extends Component {
  render() {
    const boardData = this.props.leadData.map(function(bdata, id) {
      return <TableRow key={id} index={id + 1} userName={bdata.username} recCount={bdata.recent} allCount={bdata.alltime} img={bdata.img} /> 
    });
    return (
        <tbody>
        {/* map through each object in json and create this block */}
          {boardData}
        </tbody>
    );
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td><img alt={this.props.userName} src={this.props.img} width={50} height={50} /> {this.props.userName}</td>
        <td>{this.props.recCount}</td>
        <td>{this.props.allCount}</td>
      </tr>
    )
  }
}

export default TableRows;
