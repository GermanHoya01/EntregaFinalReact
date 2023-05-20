import { BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./componentes/NavBar";
import Footer from "./componentes/footer";
import ItemListContainer from "./componentes/ItemListContainerFolder/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainerFolder/ItemDetailContainer";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
          <Route path="/" element={<ItemListContainer/>} />

          <Route path="/detail/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart/>} />
        
        </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App;