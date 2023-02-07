import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css'

export function Profile ({
  tag,
  username,
  avatar,
  location,
  stats,
}) {
  return (
  <div className={css.profileCard}>
  <div className={css.profile}>
    <div classname={css.description}>
      <img src={avatar} alt={username} className={css.avatar} width="300" />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
    <ul className={css.stats}>
      <li className={css.listItems}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.listItems}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.listItems}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
  </div>);
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired
};

