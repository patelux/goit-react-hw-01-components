import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export function Statistics ({title, stats}) {
return (

<section className={css.statistics}>
{title &&  <h2 className={css.title}>{title}</h2>}
<ul className={css.statlist}>
{stats.map(({ id, label, percentage }, idx) => {
   return ( <li className={(idx %2 === 0) ? css.itemEven : css.itemOdd} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>);
})}    
  </ul>
</section>)
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,    
    }))

};