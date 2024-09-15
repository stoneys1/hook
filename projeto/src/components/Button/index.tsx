import { ButtonContainer } from "./style";
import { IButtonProps } from "./types";

const Button = ({ title, onClick }: IButtonProps) => {
    return (
        <ButtonContainer onClick={onClick || (() => console.warn("No onClick handler provided"))}>
            {title || "Default Title"}
        </ButtonContainer>
    );
};


export default Button;