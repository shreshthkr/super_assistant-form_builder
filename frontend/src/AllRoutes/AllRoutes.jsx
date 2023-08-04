import React from 'react'
import {Routes, Route} from "react-router-dom";
import Categorized from '../Pages/Categorized';
import Cloze from '../Pages/Cloze';
import Comprehension from '../Pages/Comprehension';
import QuizzPage from '../Components/QuizzPage';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/categorize' element={<Categorized />} />
      <Route path="/cloze" element={<Cloze />} />
      <Route path="/comprehension" element={<Comprehension />}/>
      <Route path="/quizz" element={<QuizzPage />} />
    </Routes>
  )
}

export default AllRoutes
