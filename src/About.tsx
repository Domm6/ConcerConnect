// import React from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
// import './About.css'; // Import the CSS file

// const About: React.FC = () => {
//   // Sample data for multiple cards
//   const profiles = [
//     { name: 'Danny McLoan', university: 'uc berkeley', instagram: '@danny', followers: 976, image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp' },
//     { name: 'Johnnny Doe', university: 'stanford', instagram: '@johnnythedoe', followers: 800, image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp' },
//     { name: 'Jane Smith', university: 'uc irivine', instagram: '@smith_jane', followers: 1200,  image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-3.webp' }
//   ];

//   return (
//     <div className="custom-col" style={{ backgroundColor: '#9fe21f' }}>
//       <MDBContainer>
//         <MDBRow className="justify-content-center">
//           {/* Loop through the profiles and render a card for each */}
//           {profiles.map((profile, index) => (
//             <MDBCol key={index} md="4" className="mb-4"> {/* Adjust the size of the column */}
//               <MDBCard style={{ borderRadius: '15px', width: '100%' }}> {/* Set width to 100% */}
//                 <MDBCardBody className="p-4">
//                   <div className="d-flex text-black">
//                     <div className="flex-shrink-0">
//                       <MDBCardImage
//                         style={{ width: '180px', borderRadius: '10px' }}
//                         src={profile.image}
//                         alt='Generic placeholder image'
//                         fluid />
//                     </div>
//                     <div className="flex-grow-1 ms-3">
//                       <MDBCardTitle>{profile.name}</MDBCardTitle>
//                       <MDBCardText>{profile.university}</MDBCardText>

//                       <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
//                         style={{ backgroundColor: '#efefef' }}>
//                         <div>
//                           <p className="small text-muted mb-1">instagram</p>
//                           <p className="mb-0">{profile.instagram}</p>
//                         </div>
//                         <div className="px-3">
//                           <p className="small text-muted mb-1">Followers</p>
//                           <p className="mb-0">{profile.followers}</p>
//                         </div>
//                       </div>
//                       <div className="d-flex pt-1">
//                         <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
//                         <MDBBtn className="flex-grow-1">Follow</MDBBtn>
//                       </div>
//                     </div>
//                   </div>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </MDBContainer>
//     </div>
//   );
// }

// export default About;

import React from 'react';
import './About.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const About: React.FC = () => {
  // Sample data for multiple cards
  const profiles = [
    { name: 'Danny McLoan', university: 'UC Berkeley', instagram: '@danny', followers: 976, image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp' },
    { name: 'Johnnny Doe', university: 'Stanford', instagram: '@johnnythedoe', followers: 800, image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp' },
    { name: 'Jane Smith', university: 'UC Irvine', instagram: '@smith_jane', followers: 1200,  image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-3.webp' }
  ];

  return (
    <div className="custom-col" style={{ backgroundColor: '#9fe21f' }}>
      <div className="container">
        <div className="row">
          {/* Loop through the profiles and render a card for each */}
          {profiles.map((profile, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card" style={{ borderRadius: '15px' }}>
                <img
                  src={profile.image}
                  className="card-img-top"
                  alt="Profile Image"
                  style={{ width: '180px', borderRadius: '10px', margin: 'auto', marginTop: '10px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{profile.name}</h5>
                  <p className="card-text">{profile.university}</p>
                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2" style={{ backgroundColor: '#efefef' }}>
                    <div>
                      <p className="small text-muted mb-1">Instagram</p>
                      <p className="mb-0">{profile.instagram}</p>
                    </div>
                    <div className="px-3">
                      <p className="small text-muted mb-1">Followers</p>
                      <p className="mb-0">{profile.followers}</p>
                    </div>
                  </div>
                  <div className="d-flex pt-1">
                    <button className="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                    <button className="btn btn-primary flex-grow-1">Follow</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;


