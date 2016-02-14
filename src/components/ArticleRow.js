import React, { Component } from 'react';
import Moment from 'moment';

export default class ArticleRow extends Component {
  render() {
    const { key, image, title, url, submitted, profile, words } = this.props;

    return (
      <tr className="articleRow" key={key}>
        <td className="articleRow-title">
          <img className="articleRow-title-img" src={image}/>
          <a href={url} className="articleRow-title-text">{title}</a>
        </td>
        <td className="articleRow-author">{profile.first_name} {profile.last_name}</td>
        <td className="articleRow-words">{words}</td>
        <td className="articleRow-submitted">{Moment(submitted).fromNow()}</td>
      </tr>
    )
  }
}

ArticleRow.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  submitted: React.PropTypes.string.isRequired,
  profile: React.PropTypes.object.isRequired,
  words: React.PropTypes.number.isRequired
};