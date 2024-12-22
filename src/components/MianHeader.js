import './MianHeader.css'
const MainHeader=()=>{
    return(
    <header className="header">
      <div className="logo">My Blog</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    )
}
export default MainHeader;