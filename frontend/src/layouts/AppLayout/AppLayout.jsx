import { Container } from "./Styles"
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../../Components";


export default function AppLayout(){
    return(
        <Container>
            <Header />
            <Outlet />
            <Footer />

        </Container>
    );
} 


