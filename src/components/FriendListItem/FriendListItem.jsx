import PropTypes from "prop-types";

import { ItemLi, SpanStatus, ImgAvatar, ParName } from "./FriendListItem.module";

export const FriendListItem = ({status, avatar, name}) => {
    return (
        <ItemLi>
            <SpanStatus>{status}</SpanStatus>
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