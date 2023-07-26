import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import {DetailsPage} from "../components/DetailsPage"

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          {<Route path='/' element={<Home/>} />}
            <Route path="/article/:id" element={<DetailsPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes