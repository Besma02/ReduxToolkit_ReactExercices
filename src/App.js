import { Container } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { Cake } from "./components/Cake";
import { IceCream } from "./components/IceCream";
import { User } from "./components/User";
import { store } from "./store";



export default function App() {
  return( 
    <>
    <Container>
    <Provider store={store}>
     <Cake/>
     <IceCream/>
     <User/>
     </Provider>
     </Container>
   </>
  )
 
 }
 


