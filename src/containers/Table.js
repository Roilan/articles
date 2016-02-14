import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleRow from '../components/ArticleRow';
import { getArticles } from '../actions/index';

class Table extends Component {
  constructor() {
    super();

    this.renderArticleRows = this.renderArticleRows.bind(this);
  }

  componentWillMount() {
    this.props.getArticles();
  }

  renderArticleRows() {
  }

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
            {this.renderArticleRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps, { getArticles })(Table)