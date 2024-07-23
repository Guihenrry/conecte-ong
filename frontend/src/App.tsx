import { Routes, Route } from 'react-router-dom'

import { Home } from './routes/home'
import { SignIn } from './routes/sign-in'
import { SignUp } from './routes/sign-up'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}
