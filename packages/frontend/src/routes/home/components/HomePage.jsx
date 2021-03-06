import Typography from '@mui/material/Typography';
import Styled from 'styled-components';
import DuckImage from '../assets/duck.jpg';


const internals = {};

export default () => {

    const { Image, HomepageContainer, WelcomeMessage } = internals;

    return (
        <HomepageContainer>
            <WelcomeMessage>Welcome!</WelcomeMessage>
            <Image
                alt='This is a duck, because Redux!'
                src={DuckImage}
            />
        </HomepageContainer>
    );
};

internals.Image = Styled.img`
    display: block;
    width: 120px;
    margin: 1.5rem auto;
`;

internals.HomepageContainer = Styled.div`
    align-self: center;
    margin: auto;
`;

internals.WelcomeMessage = Styled(Typography).attrs({ variant: 'h4', align: 'center' })`
    // Example leveraging the mui theme from inside a styled-component
    color: ${({ theme }) => theme.palette.secondary.main};
`;
