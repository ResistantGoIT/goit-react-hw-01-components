import user from './user.json'
import s from './index.module.css'
import PropTypes from 'prop-types';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                src={user.avatar}
                alt={user.name}
                className={s.avatar}
                />
                <p className={s.name}>{user.name}</p>
                <p className={s.tag}>{user.tag}</p>
                <p className={s.location}>{user.location}</p>
            </div>

            <ul className={s.stats}>
                <li>
                <span className={s.label}>Followers</span>
                <span className={s.quantity}>{user.stats.followers}</span>
                </li>
                <li>
                <span className={s.label}>Views</span>
                    <span className={s.quantity}>{user.stats.views}</span>
                </li>
                <li>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{user.stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

export default Profile;