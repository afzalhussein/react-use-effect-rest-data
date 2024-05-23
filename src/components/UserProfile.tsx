import { PrimaryButton } from "./PrimaryButton";
import { UserAvatar } from "./UserAvatar";
import { UserInfo } from './UserInfo';
export const UserProfile = ( { user } ) => {
    return (
        <div style={{"padding": "5px"}}>
            <UserAvatar user={ user } />
            <UserInfo user={ user } />
            <PrimaryButton onClick={ () => alert( 'Hello!' ) }>Like</PrimaryButton>
        </div>
    )
};