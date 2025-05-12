import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm text-center">
      <h2 className="text-2xl font-bold text-red-800 mb-2">¡Hola, Tailwind!</h2>
      <p className="text-gray-600 mb-4">Este es un ejemplo para probar que Tailwind está funcionando correctamente.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">Haz clic</button>
    </div>
    </>
  )
}

export default App
