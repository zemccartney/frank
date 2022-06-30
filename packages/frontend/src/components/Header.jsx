import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

const internals = {};

export default () => {

    const { Link, SiteTitle } = internals;

    return (
        <AppBar position='static'>
            <Toolbar>
                <SiteTitle>Strangeluv</SiteTitle>
                <Link to='/'>Home</Link>
                <Link to='/counter'>Counter</Link>
            </Toolbar>
        </AppBar>
    );
};

internals.Link = Styled(Button).attrs({ component: NavLink, color: 'inherit' })`
    &.active {
        font-weight: bold;
        text-decoration: underline;
    }
`;

internals.SiteTitle = Styled(Typography).attrs({ variant: 'h6' })`
    flex-grow: 1;
`;
