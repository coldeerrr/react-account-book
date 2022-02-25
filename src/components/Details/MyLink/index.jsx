import { Link } from "react-router-dom"
import './index.css'

const MyLink = props => {
    const { to, children } = props
    return (
        <div className="mylink">
            <Link to={to} className={children[0]}>
                <span>{children[1]}</span>
            </Link>
        </div>
    );
}

export default MyLink