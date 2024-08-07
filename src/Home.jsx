import './Home.css'
import Header from './components/Header';
import Footer from './components/Footer';

function Home() {

  return (
    <>
      <div className="home-container">
        <Header />
        <div className="home-body">
          <p>Welcome to Fake Store.</p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home;
