import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { FormQuestionnaire, PopUpOk } from './components/forms/Forms'
import DEV from './components/developer/Developer'

function App() {
  return (
		<Routes>
			<Route path='/test/' element={<Layout />} />
			<Route path='/test/form' element={<FormQuestionnaire />} />
			<Route path='/test/ok' element={<PopUpOk />} />
			<Route path='/test/dev' element={<DEV />} />
		</Routes>
	)
}

export default App;

