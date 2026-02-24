import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import MainContent from './MainContent'

function Index() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <>
      <NavBar onLoginClick={() => setIsLoginModalOpen(true)} />
      <MainContent
        isLoginModalOpen={isLoginModalOpen}
        onLoginModalClose={() => setIsLoginModalOpen(false)}
      />
    </>
  )
}

export default Index
