// import { Link } from 'react-router-dom';
// // import './About.css';
// import SiteNav from './SiteBar'; 

// const Home = () => {
  

//   return (
//     <div className="custom-col">
//         <SiteNav></SiteNav>
//         <div >
//           <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', marginLeft: '400px'}}>
//             Welcome to Concert Connect!
//           </h1>
//           <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', marginLeft: '400px' }}>
//             Concert Connect is a web application designed to help people find others who want to attend concerts.
//           </p>
        
//         <Link to="/concerts"><button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', marginLeft: '650px' }}>
//           Find an Artist Now!
//         </button></Link>
//         </div>
//     </div>
//   );
// }

// export default Home;

import { Link } from 'react-router-dom';
import './Home.css';
import SiteNav from './SiteBar'; 

const Home = () => {
  return (
    <div className="home-container">
      <SiteNav />
      <div className="content-container">
        <img className="connect-img"src='https://cdn.dribbble.com/users/1790153/screenshots/10720154/media/886fe1d5d86d51f773294f1705b19268.png?resize=400x0'></img>
        <h1>Welcome to Concert Connect!</h1>
        <p>Concert Connect is a web application designed to help people find others who want to attend concerts.</p>
        <Link to="/concerts">
          <button>Find an Artist Now!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
