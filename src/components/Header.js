

function Header () {

    return (
              <ul class="menu" style={{ marginTop: '10px'}}>
                <a href="/" class = "logo">
                  <img src="main-logo.png" alt="sums-logo"  width = "10%" />
              </a>
              
              <li class="dropdown">
                  <a href="javascript:void(0)" class="dropbtn">get in touch</a>
                  <div class="dropdown-content">
                    <a href="https://www.instagram.com/sumsatucsd/">instagram</a>
                    <a href="https://discord.gg/XVVeGHXGTt">discord</a>
                    <a href="http://eepurl.com/cJMmqf">newsletter</a>
                    <a href = "https://www.tiktok.com/@sums.ucsd?_t=8XrH2rpnSRi&_r=1">tiktok</a>
                  </div>
                </li>
              <li><a href="/get-involved">get involved</a></li>
              <li ><a href="/events">events</a></li>
              <li><a href="/board">board</a></li>
              <li ><a href="/about">about</a></li>
            </ul>
            )
}

export default Header;
