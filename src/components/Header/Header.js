import { Link } from 'react-router-dom';
import './Header.css';
export default function Header(props) {
    return (

        <header className="Header">
            <Link to="/">
                <h1>Keeping 👆 w/ the Christensen's</h1>
            </Link>
            <nav>
                <ul className="NavLinks">
                    {
                        props.user ?
                        <>
                            <li><Link to="/feed">Family Feed</Link></li>
                            <li><Link to="/create">Create Post</Link></li>
                            <li><Link to="" onClick={props.handleLogout}>Logout</Link></li>
                        </>
                        :
                        <>
                            <li><Link to="/signup">Signup</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}