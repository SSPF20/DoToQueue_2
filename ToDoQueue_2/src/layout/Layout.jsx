// Librerias de React
import { Outlet, useNavigation } from "react-router-dom";
// importar estilos
// Componentes son los espacios que tiene cada página
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div className="Layout">
        <Header />
        <main className="Main">
            {
                navigation.state === "loading" &&(
                    <div className="Loading">Loading...</div>
                )
            }
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout