import { Button } from './Button';
export const PrimaryButton = ( props ) => {
    const primaryStyle = { backgroundColor: 'blue', color: 'white', width: "100px", boxShadow: "10px 10px 25px green", borderRadius: "70%" };
    return <Button {...props} style={primaryStyle}/>
}