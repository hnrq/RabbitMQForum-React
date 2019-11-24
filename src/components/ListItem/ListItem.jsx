import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.scss';

const ListItem = ({ title, subtitle, linkTo }) => (
  <div className="list-item">
    <Link to={linkTo} className="list-group-item list-group-item-action">
      <h4 className="title">{title}</h4>
      <span className="subtitle text-muted">{subtitle}</span>
    </Link>
  </div>
);

export default ListItem;