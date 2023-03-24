import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Typed from "typed.js"
import {useEffect,useRef} from "react"

function About() {
  const texttyping = useRef(null)
  useEffect(() => {
    const typed = new Typed(texttyping.current, {
      strings: ["  Bimbingan belajar yang berhasil mengantarkan 45.000 lebih kelulusan siswa ke PTN dan PT Kedinasan. Merupakan bimbingan belajar tatap muka berbasis teknologi online yang telah meraih 2 penghargaan MURI sebagai BImbel TERBAIK dengan KELULUSAN SISWA TERBANYAK ke PTN dan PT Kedinasan se-Indonesia, dan bimbel TERBESAR dengan LOKASI TERBANYAK se-Indonesia yang dikelola secara terpusat (no franchise). Berdiri sejak 2 Mei 1984, dan memiliki visi untuk menjadi bimbingan belajar terbaik dan terbesar se-Indonesia."],
      loop: true,
      typeSpeed: 50,
      backSpeed:50,
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <div id='tentang'>
    <Card className='GA vh-100 w-100'>
      <Card.Header className='CH'><h1>About Us</h1></Card.Header>
      <Card.Body>
        <Card.Title className='CT'>Bimbingan Belajar Terbaik dan Terbesar Se-Indonesia</Card.Title>
        <Card.Text ref={texttyping}>
        Bimbingan belajar yang berhasil mengantarkan 45.000 lebih kelulusan siswa ke PTN dan PT Kedinasan. Merupakan bimbingan belajar tatap muka berbasis teknologi online yang telah meraih 2 penghargaan MURI sebagai BImbel TERBAIK dengan KELULUSAN SISWA TERBANYAK ke PTN dan PT Kedinasan se-Indonesia, dan bimbel TERBESAR dengan LOKASI TERBANYAK se-Indonesia yang dikelola secara terpusat (no franchise). Berdiri sejak 2 Mei 1984, dan memiliki visi untuk menjadi bimbingan belajar terbaik dan terbesar se-Indonesia.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}
export default About;