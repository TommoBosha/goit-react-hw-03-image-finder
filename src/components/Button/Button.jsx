import { StyledButton } from './Button.styled';

const Button = ({onClick}) => {
    return (
        <StyledButton type="button" onClick={onClick}>Load More</StyledButton>
    )
}


export default Button;
