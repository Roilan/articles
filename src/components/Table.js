import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <th>Unpublished Articles</th>
            <th>Author</th>
            <th>Words</th>
            <th>Submitted</th>
          </tr>
          <tr>
            <td>Immigration Reform 2013: Democrats have the edge</td>
            <td>Medha Chandorkar</td>
            <td>433</td>
            <td>6 minutes ago</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}