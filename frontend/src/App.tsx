import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout/Layout.tsx'
import BusinessPlan from './pages/BusinessPlan.tsx'
import ProjectIdea from './pages/ProjectIdea.tsx'
import Contact from './pages/Contact.tsx'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/business-plan" element={<BusinessPlan />} />
        <Route path="/project-idea" element={<ProjectIdea />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
)
}

export default App
