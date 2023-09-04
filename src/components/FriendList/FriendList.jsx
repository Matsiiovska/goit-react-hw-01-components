import PropTypes from "prop-types";
import { FriendsCont } from "./FriendList.styled";

import { FriendListItem } from "components/FriendListItem/FriendListItem";


export const FriendList = ({friends}) => {
    return (
        <FriendsCont>    
            {
                friends.map(({ id, avatar, name, isOnline }) => {
                    return (
                        <FriendListItem
                        key={id}
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                    />);
                })
  }
</FriendsCont> 
    );
}

FriendList.propTypes = {
    friends: PropTypes.array

}