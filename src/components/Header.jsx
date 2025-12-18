import MyProfile from "../images/MyProfile.png";

function Header() {
  return (
    <header className="header-info">
      <img src={MyProfile} className="my-profile-logo" />
      <h1 className="name-title-card">Thinh Pham</h1>
      <p className="position-card">Frontend Developer</p>
      <a
        href="https://www.thinhpham.tech/"
        target="_blank"
        className="portforlio-website"
      >
        <span>thinhpham.tech</span>
      </a>
      <button className="email-info">
        <a href="mailto:thinhpham1842005@gmail.com" className="email-info-item">
          <i className="fa-solid fa-envelope"></i>Email
        </a>
      </button>
    </header>
  );
}
export default Header;
