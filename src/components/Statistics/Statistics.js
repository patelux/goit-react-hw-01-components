import PropTypes from 'prop-types';

export function Statistics ({title, stats}) {
    // console.log('stats', stats);
return (

<section class="statistics">
{title &&  <h2 class="title">{title}</h2>}
{/* {title? <h2 class="title">{title}</h2> : null} */}
<ul class="stat-list">
{stats.map(({ id, label, percentage }) => {
   return ( <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
        </li>);
})}    
  </ul>
</section>)
};

Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number.isRequired,
    label: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};