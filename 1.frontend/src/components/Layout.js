import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div className="app-container">
            <header>
                {/* Navbar to navigate*/}
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/register">Sign Up</Link></li>
                    </ul>
                </nav>
            </header>
            {/* Main Body of the page */}
            <main>
                <Outlet />
            </main>
            {/* Common footer */}
            <footer>
                <p>© 2025 My React App</p>
            </footer>
        </div>
    );
}

export default Layout;