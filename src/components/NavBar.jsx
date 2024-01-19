import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Nav, Navbar, Button, Image} from 'react-bootstrap';
import '../index.css'
import logo from "../assets/LogoProLoco.png"


function NavigationBar(props) {

    return (
        <Navbar collapseOnSelect={true} expand={ "xxl" } style={{backgroundColor: "rgb(241 248 254)"}}>
            <Container fluid className={"justify-content-between"}>
                <Navbar.Brand type={"button"} onClick={() => navigate(`/`)}>
                    <ul className={"nav align-items-center align-items-start"}>
                        <li>
                            <Image alt="photo" src={logo} width="130" height="130" className="me-4" />
                        </li>
                        <li style={{fontSize: "2rem", marginRight: "1rem", color: "rgb(1 102 84)", fontFamily: "Boldoni Old Fashion"}}> 
                            <b>Pro Loco Nusco</b>
                            <div>Balcone dell'Irpinia A.P.S.</div>
                        </li>
                    </ul>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="justify-content-center">
                        <Nav.Link href="/chiSiamo" style={{fontSize: "16px", color: "rgb(1 102 84)", fontFamily: "Boldoni Old Fashion"}}><b>Chi Siamo</b></Nav.Link>
                        <Nav.Link href="/struttureRicettive" style={{fontSize: "16px", color: "rgb(1 102 84)", fontFamily: "Boldoni Old Fashion"}}><b>Strutture Ricettive</b></Nav.Link>
                        <Nav.Link style={{fontSize: "16px", color: "rgb(1 102 84)", fontFamily: "Boldoni Old Fashion"}}><b>Ristoranti</b></Nav.Link>
                        <Nav.Link style={{fontSize: "16px", color: "rgb(1 102 84)", fontFamily: "Boldoni Old Fashion"}}><b>Attrazioni</b></Nav.Link>
                        <Nav.Link style={{fontSize: "16px", color: "rgb(1 102 84)", fontFamily: "Boldoni Old Fashion"}}><b>Aziende Locali</b></Nav.Link>
                        <Nav.Link style={{fontSize: "16px", color: "rgb(1 102 84)", fontFamily: "Boldoni Old Fashion"}}><b>Foto e Video</b></Nav.Link>
                        <Nav.Link style={{fontSize: "16px", color: "rgb(1 102 84)", fontFamily: "Boldoni Old Fashion"}}><b>Specialità Culinarie</b></Nav.Link>
                        <Nav.Link style={{fontSize: "16px", color: "rgb(1 102 84)", fontFamily: "Boldoni Old Fashion"}}><b>Festività</b></Nav.Link>
                        <Nav.Link style={{fontSize: "16px", color: "rgb(1 102 84)", fontFamily: "Boldoni Old Fashion"}}><b>Contattaci</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavigationBar;