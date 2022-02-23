import { NavLink } from 'react-router-dom'
import './index.css'

const Nav = (props) => {
    return (
        <div>
            <NavLink className={({isActive}) => { return isActive ? 'item yes' : 'item no'}} {...props}/>
        </div>
    );
}

export default Nav