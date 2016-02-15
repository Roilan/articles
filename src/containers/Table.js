import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleRow from '../components/ArticleRow';
import { getArticles, loadMoreArticles, getMoreArticles } from '../actions/index';

class Table extends Component {
  constructor() {
    super();

    this.renderArticleRows = this.renderArticleRows.bind(this);
    this.loadMoreArticles = this.loadMoreArticles.bind(this);
  }

  componentWillMount() {
    this.props.getArticles();
  }

  renderArticleRows() {
    const { visibleArticles } = this.props;
    return visibleArticles.map(article => {
      return (
        <ArticleRow
          key={article.id}
          image={article.image}
          title={article.title}
          url={article.url}
          submitted={article.publish_at}
          profile={article.profile}
          words={article.words}
        />
      )
    });
  }

  loadMoreArticles() {
    const { loadMoreArticles, allArticles, visibleArticles, getMoreArticles } = this.props;
    if (visibleArticles.length === 60) {
      // do something because we reached max
    }
    else if (visibleArticles.length !== 0 && allArticles.length === visibleArticles.length) {
      getMoreArticles();
    } else {
      loadMoreArticles();
    }
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
        <button onClick={this.loadMoreArticles}>Load More Articles</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { ...state.data }
}

export default connect(mapStateToProps, { getArticles, loadMoreArticles, getMoreArticles })(Table)