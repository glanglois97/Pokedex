import Header from "../Header";
import List from "../List";
import Footer from "../Footer";
import "./styles.css";
import { PokemonsProvider } from "../../Provider/pokemons";

const Index = () => {
  return (
    <PokemonsProvider>
      <Header />
      <List />
      <Footer />
    </PokemonsProvider>
  );
};

export default Index;
