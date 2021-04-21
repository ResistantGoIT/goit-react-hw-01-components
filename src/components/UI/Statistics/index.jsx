import s from './index.module.css'
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (
        <section className={s.statistics}>
        {title && <h2 className={s.title}>{title.toUpperCase()}</h2> }
          
            <ul className={s['stat-list']}>
                
                {stats.map(item => (
                    <li className={s.item} key={item.id}>
                        <span className={s.label}>{item.label}</span>
                        <span className={s.percentage}>{item.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )  
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
    title: PropTypes.string,
}

export default Statistics;