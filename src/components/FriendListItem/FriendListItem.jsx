import PropTypes from "prop-types";

import { ItemLi, SpanStatus, ImgAvatar, ParName } from "./FriendListItem.styled";

export const FriendListItem = ({isOnline, status, avatar, name}) => {
    return (
        <ItemLi>
            <SpanStatus statusType={isOnline}>{status}</SpanStatus>
            <ImgAvatar src={avatar} alt="User avatar" width="48" />
            <ParName>{name}</ParName>
        </ItemLi>
    );
}

FriendListItem.propTypes = {
    status: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
}