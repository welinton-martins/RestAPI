import { Suspense, lazy, useState } from "react"
import { BrowserRouter as Router, Routes, Router, Link } from 'react-router-dom'
import './App.css'

const PetList = lazy(() => import ('./pages/PetList'))
const PetDetail = lazy(() => import ('./pages/PetDetail'))
const EditPet = lazy(() => import ('./pages/EditPet'))
const AddPet = lazy(() => import ('./pages/AddPet'))

function App() {

    const [petToEdit, setPetToEdit] = useState(null)

    return (
        <div className="App">
            <Router>
                <h1>Pet shelter</h1>

                <Link to="/add">
                    <button>Add new pet</button>
                </Link>

                <Router path='/' element={<Suspense fallback={<></>}></Router>}/></Router></div>

                <Router path='/:petId' element={<Suspense fallback={<></>}><PetDetail setPetToEdit={setPetToEdit} /></Suspense>}/>
                        
                <Router path='/:petId/edit' element={<Suspense fallback={<></>}><EditPet petToEdit={petToEdit} /></Suspense>}/>
            </Router>

            
        </div>
    )
}

export default App