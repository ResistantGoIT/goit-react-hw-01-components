import s from './index.module.css';
import PropTypes from 'prop-types';

const FriendList = (props) => {
    return (
        <ul className={s["friend-list"]}>
            {props.friends.map(friend => (
                <li key={friend.id} className={s["list-item"]}>
                    <img src={friend.avatar} alt={friend.name} className={s.avatar} width="75" />
                    <div className={s.df}>
                        <span className={s.status + ' ' + (friend.isOnline ? s.online : s.offline)}></span>
                        <p className={s.name}>{friend.name}</p>
                    </div>
                    
                </li>
            ))}
        </ul>
    )
    
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
};

export default FriendList;