import Home from "./pages/Home"
import store from "./utils/store"
import { Provider } from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import { persistStore } from "redux-persist"




function App() {

  let peristor = persistStore(store)

  return (
    <>
    <Provider store={store}>

      <PersistGate persistor={peristor}>
   
     <Home/>

     </PersistGate>
     
     </Provider>
    
    </>
  )
}

export default App
