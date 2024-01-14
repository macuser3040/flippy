// Sample React component for the login page
const LoginPage = () => {
    return (
        <div className="login-form">
            <h2>Welcome to Flipyy Shopping App</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button className="button" type="submit">Login</button>
            </form>
        </div>
    );
};

ReactDOM.render(<LoginPage />, document.getElementById('root'));

// JavaScript for dark mode and light mode buttons
const darkModeBtn = document.getElementById('darkModeBtn');
const lightModeBtn = document.getElementById('lightModeBtn');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
    body.classList.add('dark-mode');
});

lightModeBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode');
});
