import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout/Layout.tsx'
import BusinessPlan from './pages/BusinessPlan.tsx'
import ProjectIdea from './pages/ProjectIdea.tsx'
import Contact from './pages/Contact.tsx'
import Home from './pages/Home.tsx'

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/business-plan" element={<BusinessPlan />} />
          <Route path="/project-idea" element={<ProjectIdea />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
)
}

export default App
