import PropTypes from "prop-types";
import { FriendsCont } from "./FriendList.module";

import { FriendListItem } from "components/FriendListItem/FriendListItem";


export const FriendList = ({friends}) => {
    return (
        <FriendsCont>    
            {
                friends.map(({ id, avatar, name, isOnline }) => {
                    return (
                        <FriendListItem
                        key={id}
                        status={isOnline}
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