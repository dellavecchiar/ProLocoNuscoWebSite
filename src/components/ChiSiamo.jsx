import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Row, Col} from 'react-bootstrap';
import chiSiamo from "../assets/ChiSiamo.png";


function ChiSiamo() {
    return (
        <Container className="justify-content-between align-items-center">
            <Row>
                <Col md={1}/>
                <Col md={10} style={{ backgroundColor: "white"}}>
                    <Image alt="photo" src={chiSiamo} fluid/>
                </Col>
                <Col md={1}/>
            </Row>
            <Row>
                <Col md={1}/>
                <Col md={10} style={{ backgroundColor: "white"}}>
                    <Container style={{ textAlign: 'justify'}}>
                        <p>
                            <b>La Pro Loco Nusco - Balcone dell'Irpinia</b> A.P.S è un' associazione senza scopo di lucro formata da volontari che si impegnano 
                            per la promozione del luogo, per la scoperta e la tutela delle tradizioni locali, per migliorare la qualità della vita di chi vi abita, per
                            valorizzare i prodotti e le bellezze del nostro territorio.
                        </p>
                        <p>
                            La <b>Pro Loco</b> organizza manifestazioni in ambito turistico, culturale, storico, ambientale, folcloristico e gastronomico.
                        </p>
                        <p>
                            Vuole essere un punto di riferimento sia per gli abitanti sia per i visitatori di Nusco.
                        </p>
                        <p>
                            La montagna scende in contrafforti e declivi su Nusco (AV), adagiata a 914m tra le valli dell’Ofanto e del Calore, nel cuore dell’
                            Irpinia. Il borgo, compatto e discreto nella sua architettura, ha come ape regina il campanile: titanico, alto 33m come gli anni di 
                            Cristo. Qui la cristianità si identifica con Amato, il santo patrono (e primo vescovo di Nusco) a cui è dedicata la maestosa 
                            cattedrale. I grossi massi di pietra della facciata, con la torre dell’orologio e il campanile, esigono che sia ammirata da diverse
                            angolazioni, non potendo essere compresa in un unico sguardo. Davvero imponente!
                        </p>
                        <p>    
                            Nusco è uno dei Borghi piu' Belli d' Italia
                        </p>
                    </Container>
                </Col>
                <Col md={1}/>
            </Row>
        </Container>
    );
}

export default ChiSiamo;
