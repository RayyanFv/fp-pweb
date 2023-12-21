import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Homepage from './app/homepage/Main'
import Technologies from './app/technologies/Main'
import AboutUs from './app/about-us/Main'
import Purchase from './app/purchase/Main'
import Footer from './components/Footer'


export default function App() {
  return (
    <main className='w-full h-screen '>
      <Header />
      <Purchase/>
      <Footer/>
    </main>
  );
}
