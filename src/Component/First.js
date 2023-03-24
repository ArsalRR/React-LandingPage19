import { Container, Row, Col } from 'react-bootstrap'
import { useRef, useEffect } from "react"
import Typed from "typed.js"

function First() {
  const texttyping = useRef(null)
  useEffect(() => {
    const typed = new Typed(texttyping.current, {
      strings: ["Bimbingan Belajar Rangking"],
      loop: true,
      typeSpeed: 50,
      backSpeed:50,
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <div className='awalan vh-100 w-100' id='beranda'>
      <Container>
        <Row>
          <Col>
            <h1 ref={texttyping}>Selamat Datang Di Bimbel Rangking</h1>
            <p>Bermutu Mencerdaskan Anak bangsa</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default First