import { NavLink } from 'react-router-dom';
const Navigation = () =>
    <nav>
        <NavLink exact to='/'> Home Page</NavLink>
        <NavLink to='/movies'>Movie Page </NavLink>
        {/* <NavLink to='/details'> Movie Detail Page</NavLink> */}
        {/* <NavLink to='/cast'>Cast </NavLink>
        <NavLink to='/reviews'>Review </NavLink> */}

    </nav>;

export default Navigation