import { NavLink } from 'react-router-dom'
import './index.css'

const Nav = props => {
    const { to, children } = props
    return (
        <div className='navlink'>
            <NavLink className={({isActive}) => { return isActive ? `${children[0]}_y` : `${children[0]}_n`}} to={to}>
                <span>{children[1]}</span>
                </NavLink>
        </div>
    );
}

export default Nav