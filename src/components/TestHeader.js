import reactLogo from '../logo192.png';

function TestHeader(){
    return(
      <header>
            <nav className="navBar">
              <img src={reactLogo} alt="React Logo" className="navLogo"/>
              <h3 className="navLogoText">ReactFacts</h3>
              <h4 className="navTitle">React Course – Project 1</h4>
            </nav>
        </header>
    )
}

export default TestHeader