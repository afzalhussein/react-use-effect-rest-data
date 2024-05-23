export const UserInfo = ( { user } ) => {
    return (
        <div>
            <h1 className="rainbow-letters">{ Array.from(user.name).map(c=><span>{c}</span>) }</h1>
            <p>{ user.bio }</p>
        </div>
    )
}