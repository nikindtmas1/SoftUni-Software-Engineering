



const Header = ({
  navigationChangeHandler,
}) => {
  const onHeaderClick = (e) => {
    e.preventDefault();

    console.log(e.target.tagName);

    if(e.target.tagName == 'A'){
      console.log(e.target.href);
      let url = new URL(e.target.href)
      navigationChangeHandler(url.pathname)
    }
};

    return (
        <header onClick={onHeaderClick}>
        <h1><a class="home" href="/home">GamesPlay</a></h1>
        <nav>
          <a href="/games">All games</a>
          <div id="user">
            <a href="/create-game">Create Game</a>
            <a href="/logout">Logout</a>
          </div>
          <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </nav>
      </header>
    );
};

export default Header;