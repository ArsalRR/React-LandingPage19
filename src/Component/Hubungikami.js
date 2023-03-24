import React from 'react'

function Hubungikami() {
  return (
    <div className='hubungi vh-100 w-100' id='hubungi kami'>
      <div className="container">
  <div className="row">
    <div className="col-8">
      <h2 className="my-3">Daftarkan Diri Anda Disini</h2>
      <form onSubmit={send_massage} method="get">
        <div className="row mb-3">
          <label htmlFor="judul" className="col-sm-2 col-form-label">
            Nama
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="nama"
              name="judul"
              autofocus="off"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="penulis" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="email"
              name="penulis"
              autoFocus="off"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="penerbit" className="col-sm-2 col-form-label">
            Asal Sekolah
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="asalsekolah"
              name="penerbit"
              autoFocus="off"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="penerbit" className="col-sm-2 col-form-label">
            Pesan
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="pesan"
              name="penerbit"
              autoFocus="off"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Daftar Disini
        </button>
      </form>
    </div>
  </div>
</div>
    </div>
    
  )
  

}
function send_massage(){
let nama = document.getElementById('nama').value;
let email = document.getElementById('email').value;
let pesan = document.getElementById('pesan').value;
let asalsekolah = document.getElementById('asalsekolah').value;
var send = window.open('https://api.whatsapp.com/send?phone=62882005021332&text=Hai+kak%2C+saya+ingin+mendaftar+Bimbel+Rangking.%0D%0ABerikut+data-data+yang+saya+lampirkan+%3A%0D%0A1.+nama+%3A%0D%0A'+nama+'2.+email+anda+%3A%0D%0A'+email+'3.+pesan+yg anda+%3A%0D%0A'+pesan+'4.+saya sekolahdi+%3A%0D%0A'+asalsekolah+'_blank');
send.focus();
}
export default Hubungikami