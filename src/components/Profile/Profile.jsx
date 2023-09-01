import PropTypes from 'prop-types';
import {ProfileAvatar, Description, AvatarImg, ParName, ParTag, ParLocation, ProfileStats, StatsLabel, StatsQuantity} from './Profile.module.jsx';

export const Profile = ({username, tag, location, avatar, stats:{followers,views,likes}}) => {
    return (
    <ProfileAvatar>
        <Description>
            <AvatarImg
                src={avatar}
                alt="User avatar"
            />
            <ParName>{username}</ParName>
            <ParTag>{'@'+tag}</ParTag>
            <ParLocation>{location}</ParLocation>
        </Description>

        <ProfileStats>
            <li>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{followers}</StatsQuantity>
            </li>
            <li>
                <StatsLabel>Views</StatsLabel>
                <StatsQuantity>{views}</StatsQuantity>
            </li>
            <li>
                <StatsLabel>Likes</StatsLabel>
                <StatsQuantity>{likes}</StatsQuantity>
            </li>
        </ProfileStats>
    </ProfileAvatar>); 
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location:PropTypes.string,
  avatar: PropTypes.string,
    stats: PropTypes.shape(
        {
          followers: PropTypes.number,
          views: PropTypes.number,
          likes: PropTypes.number
        }
    ) 
      
}
