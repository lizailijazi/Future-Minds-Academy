export default function Header(prop){
    return(
        <div>
              <header className="header row" id="top">
         <div className="col logo-col">
            <img src="./assets/images/logo.png" alt="Your Imge"/>
         </div>
         <button className="btn-white duplicate">Join</button>
         <div className="hamburger" tabindex="0">
            <span className="material-symbols-outlined">menu</span>
            <div className="notification-down">
               <ul>
                  <li><a href="/">Home {prop.title}</a></li>
                  <li><a href="/about">About Us </a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li className="button"><a href="index.html">Get the App {prop.title}</a></li>
              </ul>              
            </div>
         </div>
         <div className="col navigation-col">
            <a href="/">Home {prop.title}</a>
            <a href="/about">About Us </a>
            <a href="/services">Services</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact Us</a>
            <a href="/blog">Blog</a>
         </div>
         <div className="col btn-primary">
            <button className="btn-white">Join</button>
            <button className="btn-black">Get the App {prop.title}</button>
         </div>
      </header>
        </div>
    )
}