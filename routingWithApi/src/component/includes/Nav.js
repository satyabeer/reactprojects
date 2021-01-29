import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className="header">
            <h1 className="logo"><Link to="/">Logo</Link></h1>
            <ul className="main-nav">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/shop"><li>Shop</li></Link>
            </ul>
        </header>
    )
}

export default Nav;