// import React from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
// import './About.css'; // Import the CSS file
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const Concerts: React.FC = () => {
//   const profiles = [
//     { name: 'Concert #1', location: 'Paramount Theatre', instagram: '@theweeknd', followers: '35.5M', rating: 8.5, image: 'https://yt3.googleusercontent.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s900-c-k-c0x00ffffff-no-rj' },
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
//                       <MDBCardText>{profile.location}</MDBCardText>

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
//                         <div>
//                           <p className="small text-muted mb-1">Rating</p>
//                           <p className="mb-0">{profile.rating}</p>
//                         </div>
//                       </div>
//                       <div className="d-flex pt-1">
//                       <Link to="/about"><MDBBtn outline className="me-1 flex-grow-1">See Attendees</MDBBtn></Link>
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

// export default Concerts;


import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import './About.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Concerts: React.FC = () => {
  const profiles = [
    { name: 'Concert #1', location: 'Paramount Theatre', instagram: '@theweeknd', followers: '35.5M', rating: 8.5, image: 'https://yt3.googleusercontent.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s900-c-k-c0x00ffffff-no-rj' },
  ];

  return (
    <div className="custom-col" style={{ backgroundColor: '#9fe21f' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          {/* Loop through the profiles and render a card for each */}
          {profiles.map((profile, index) => (
            <MDBCol key={index} md="4" className="mb-4"> {/* Adjust the size of the column */}
              <MDBCard style={{ borderRadius: '15px', width: '100%' }}> {/* Set width to 100% */}
                <MDBCardBody className="p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        style={{ width: '180px', borderRadius: '10px' }}
                        src={profile.image}
                        alt='Generic placeholder image'
                        fluid />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <MDBCardTitle>{profile.name}</MDBCardTitle>
                      <MDBCardText>{profile.location}</MDBCardText>

                      <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ backgroundColor: '#efefef' }}>
                        <div>
                          <p className="small text-muted mb-1">instagram</p>
                          <p className="mb-0">{profile.instagram}</p>
                        </div>
                        <div className="px-3">
                          <p className="small text-muted mb-1">Followers</p>
                          <p className="mb-0">{profile.followers}</p>
                        </div>
                        <div>
                          <p className="small text-muted mb-1">Rating</p>
                          <p className="mb-0">{profile.rating}</p>
                        </div>
                      </div>
                      <div className="d-flex pt-1">
                      <Link to="/about"><MDBBtn outline className="me-1 flex-grow-1">See Attendees</MDBBtn></Link>
                      </div>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Concerts;
