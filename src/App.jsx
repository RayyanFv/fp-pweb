import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Homepage from './app/homepage/Main'
import Technologies from './app/technologies/Main'
import AboutUs from './app/about-us/Main'
import Purchase from './app/purchase/Main'
import Footer from './components/Footer'
import Signin from './app/signin/Main'
import Signup from './app/signup/Main'
import AdminDashboard from './app/admin-dashboard/Main'
import UserDashboard from './app/user-dashboard/Main'


export default function App() {
  return (
    <main className='w-full h-screen '>
      <Header />
      <UserDashboard/>
      <Footer/>
    </main>
  );
}
