import { NavLink } from 'react-router-dom'
import './index.css'

const Nav = props => {
    const { to, children } = props
    return (
        <div>
            <NavLink className={({isActive}) => { return isActive ? `${children}_y` : `${children}_n`}} to={to}/>
        </div>
    );
}

export default Nav