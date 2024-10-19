import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components from React Router
import Home from './components/Home/Home';
import EmailRegistration from './components/EmailRegistration/EmailRegistration';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import RefundAndCancellation from './components/Footer/RefundAndCancellation';
import GeneralDisclaimer from './components/Footer/GeneralDisclaimer';
import TermsAndCondition from './components/Footer/TermsAndCondition';
import SignUp from './components/SignUp/SignUp';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>

<Routes>
  {/* <Route path="/preSalePage" element={<PreSalePage />} /> */}
  <Route path="/Login" element={<LoginPage />} />
  <Route path="/SignUp" element={<SignUp/>} />
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/register" element={<EmailRegistration />} />
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/terms-conditions" element={<TermsAndCondition />} />
  <Route path="/general-disclaimer" element={<GeneralDisclaimer />} />
  <Route path="/refund-cancellation" element={<RefundAndCancellation />} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
