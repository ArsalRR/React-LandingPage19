
function NavbarComponent() {
  return (
    <div className='navbar'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info shadow-sm fw-bold fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Bimbingan Belajar Rangking
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#beranda">
                Beranda
              </a>
              <a className="nav-link" href="#tentang">
                Tentang
              </a>
              <a className="nav-link" href="#galeri">
                Galeri
              </a>
              <a className="nav-link" href="#hubungi kami">
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavbarComponent