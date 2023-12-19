import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// Scss
import style from "./Navbar.module.scss";
// Logo
import logo from "../../assets/images/logo.png";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0" sticky="top" >
      <Container className={style.box}>

        <Navbar.Brand href="#home" className={style.logo}>
          <img src={logo} alt="logo" />
          مؤسسة عنوان التكنولوجيا الأمنية
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className={style.nav_link}>
          <Nav className="me-auto">
            <Nav.Link href="#home" className={style.active}>الرئيسية</Nav.Link>
            <Nav.Link href="#link">مشاريعنا</Nav.Link>
            <Nav.Link href="#link">شركاء النجاح</Nav.Link>
            <Nav.Link href="#link">اتصل بنا</Nav.Link>
            <Nav.Link href="#link">حول</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default BasicExample;
