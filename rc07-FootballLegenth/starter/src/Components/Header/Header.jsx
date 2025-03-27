import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";
import HeaderStyle from "./Header.module.css";

const Header = () => {
    return(
        <Container>
            <Image src={logo} width={"200px"}/> <br/>
            <h1 className={HeaderStyle.title}>Football legends</h1>

        </Container>
    )
}

export default Header;