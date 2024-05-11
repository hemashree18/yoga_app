import { Outlet } from 'react-router-dom'
import NavBar from '../components/headers/NavBar'
import Hero from '../pages/Home/Hero/Hero';
import Hero2 from '../pages/Home/Hero/Hero2';
import Gallary from '../pages/Home/Gallary/Gallary';
import PopularClasses from '../pages/Home/PopularClasses/PopularClasses';
import Card from '../pages/Home/PopularClasses/Card';
const MainLayout = () => {
  return (
    <main className='dark:bg-black overflow-hidden'>
        <NavBar/>
        <Outlet/>
        <Hero/>
        <Hero2/>
        <Gallary/>
        <PopularClasses/>
        <Card/>

        <footer>Footer</footer>
    </main>
  )
}

export default MainLayout