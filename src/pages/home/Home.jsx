import SideBar from '../../Components/SideBar/SideBar'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
        <SideBar/>
        <div className="homeContainer">
          home container
        </div>
    </div>
  )
}

export default Home