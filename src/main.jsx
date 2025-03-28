import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HelloPage from './Pages/HelloPage/HelloPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router basename="/isworldnew-website"> {/* название моего удалённого репозитория */}
          <Routes>
              <Route path="/" element={<HelloPage />} />
          </Routes>
      </Router>
  </React.StrictMode>
);