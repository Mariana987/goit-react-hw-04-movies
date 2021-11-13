import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

const Navigation = () =>
    <>
        <nav className={s.navigation}>
            <NavLink exact to='/' className={s.navItem}> Home Page</NavLink>
            <NavLink to='/movies' className={s.navItem}>Movie Page </NavLink>
            {/* <NavLink to='/details'> Movie Detail Page</NavLink> */}
            {/* <NavLink to='/cast'>Cast </NavLink>
        <NavLink to='/reviews'>Review </NavLink> */}

        </nav>
        <hr />
    </>;

export default Navigation