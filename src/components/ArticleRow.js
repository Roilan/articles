import React, { Component } from 'react';

export default class ArticleRow extends Component {
  render() {
    return (
      <tr className="articleRow">
        <td className="articleRow-title">
          <img className="articleRow-title-img" src="http://thumbs.policymic.com/jbftphJJ9iicv1UtzATuAJSu3Sw=/0x96:2988x1980/500x315/s3.amazonaws.com/policymic-images/a72af79065b61349b1e3f8475d1f9db30f576e34bee3bb75c30177f665cf9019.jpg" alt=""/>
          <span className="articleRow-title-text">Immigration Reform 2013: Democrats have the edge</span>
        </td>
        <td className="articleRow-author">Medha Chandorkar</td>
        <td className="articleRow-words">433</td>
        <td className="articleRow-submitted">6 minutes ago</td>
      </tr>
    )
  }
}