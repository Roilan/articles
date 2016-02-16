import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleRow from '../components/ArticleRow';
import { getArticles, loadMoreArticles, getMoreArticles, sortArticles, SORT_BY_WORDS, SORT_BY_SUBMITTED } from '../actions/index';

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
    const { visibleArticles, sortedArticles } = this.props;
    let articles = sortedArticles.length > 0 ? sortedArticles : visibleArticles;

    return articles.map(article => {
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
    if (visibleArticles.length !== 0 && allArticles.length === visibleArticles.length) {
      getMoreArticles();
    } else {
      loadMoreArticles();
    }
  }

  render() {
    const { allArticles, visibleArticles } = this.props;
    const renderLoadMore = allArticles.length > 30 && allArticles.length === visibleArticles.length ? (
      <button className="articleLoadMore articleLoadMore-disabled" onClick={this.loadMoreArticles} disabled>Load More Articles</button>
    ): (
      <button className="articleLoadMore" onClick={this.loadMoreArticles}>Load More Articles</button>
    );

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Unpublished Articles</th>
              <th>Author</th>
              <th onClick={this.props.sortArticles.bind(null, SORT_BY_WORDS)}>Words</th>
              <th onClick={this.props.sortArticles.bind(null, SORT_BY_SUBMITTED)}>Submitted</th>
            </tr>
          </thead>

          <tbody>
            {this.renderArticleRows()}
          </tbody>
        </table>
        {renderLoadMore}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { ...state.data }
}

export default connect(mapStateToProps, { getArticles, loadMoreArticles, getMoreArticles, sortArticles })(Table)