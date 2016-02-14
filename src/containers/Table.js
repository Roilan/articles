import React, { Component } from 'react';
import ArticleRow from '../components/ArticleRow';

export default class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Unpublished Articles</th>
              <th>Author</th>
              <th>Words</th>
              <th>Submitted</th>
            </tr>
          </thead>

          <tbody>
           <ArticleRow />
          </tbody>
        </table>
      </div>
    )
  }
}