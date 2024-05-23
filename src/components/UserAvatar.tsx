export const UserAvatar = ( { user } ) => {
    return <img src={ user.avatarUrl } alt={ `${ user.name }'s avatar` } width={'50px'}/>;
}