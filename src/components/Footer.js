import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <Navbar className='bg-dark' variant='dark'>
      <Container>
        <Navbar.Brand href="#home">@2022</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            build: <a href="https://www.instagram.com/dewaangga1997/">Dewa Angga</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;