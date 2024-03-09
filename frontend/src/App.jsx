
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Startpage from './components/startpage';
import NavBar from './components/navbar';
import Animcursor from './components/AnimCursor';
function App(){
  return(
    <main className='bg-white'>
      <Animcursor/>
      <BrowserRouter>

        <NavBar/>
        <div className='py-4'>
          {/* blank space */}
        </div>

      <Routes>
        <Route path='/' element={<Startpage/>}/>
      </Routes> 
      
     
      </BrowserRouter>
    </main>
  )
}

export default App