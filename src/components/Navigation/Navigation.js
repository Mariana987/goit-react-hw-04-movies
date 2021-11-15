import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

const Navigation = () =>
    <>
        <nav className={s.navigation}>
            <NavLink exact to='/' className={s.navItem}> Home Page</NavLink>
            <NavLink exact to='/movies' className={s.navItem} >Movie Page </NavLink>
        </nav>
        <hr />
    </>;

export default Navigation