import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../../asset/styles/joinTeam.css';

// Import images
import Ellipse1 from '../../asset/images/ellipse/ecllipse1.png';
import Ellipse2 from '../../asset/images/ellipse/ellipse2.png';
import Ellipse3 from '../../asset/images/ellipse/ellipse3.jpg';
import Ellipse4 from '../../asset/images/ellipse/ellipse4.png';
import Ellipse5 from '../../asset/images/ellipse/ellipse5.png';
import Ellipse6 from '../../asset/images/ellipse/ellipse6.png';
import Ellipse7 from '../../asset/images/ellipse/ellipse7.png';
import Ellipse8 from '../../asset/images/ellipse/ellipse8.png';
import Ellipse9 from '../../asset/images/ellipse/ellipse9.png';
import Ellipse10 from '../../asset/images/ellipse/ellipse10.png';
import Ellipse11 from '../../asset/images/ellipse/ellipse11.png';

const imageRows = [
  [Ellipse1, Ellipse2, Ellipse3, Ellipse4, Ellipse5, Ellipse6],
  [Ellipse4, Ellipse7, Ellipse8, Ellipse9, Ellipse10, Ellipse11],
];

const JoinTeamSection = () => {
  return (
    <section id="nine">
      <Container className="pt-5">
        <Row className="nine p-4">
          {/* Left Column */}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <h4 className="join">Join our team</h4>
            <p className='join-paragraph'>
              Join our professional network of instructors<br />
              parents & guardians
            </p>
            <Button variant="dark">Join the team</Button>
          </Col>

          {/* Right Column */}
          <Col md={8} className="d-flex flex-column align-items-center">
            {imageRows.map((row, rowIndex) => (
              <div key={`row-${rowIndex}`} className="d-flex flex-wrap justify-content-center">
                {row.map((imageSrc, imageIndex) => (
                
                  <Image
                    key={`img-${rowIndex}-${imageIndex}`}
                    src={imageSrc}
                    alt={`Ellipse ${imageIndex + 1}`}
                    height="60"
                    width="60"
                    className="rounded-circle img-fluid m-2"
                  />
                ))}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinTeamSection;

// import React from 'react';
// import { Container, Row, Col, Button, Image } from 'react-bootstrap';
// import '../../asset/styles/joinTeam.css';

// // Import images
// import Ellipse1 from '../../asset/images/ellipse/ecllipse1.png';
// import Ellipse2 from '../../asset/images/ellipse/ellipse2.png';
// import Ellipse3 from '../../asset/images/ellipse/ellipse3.jpg';
// import Ellipse4 from '../../asset/images/ellipse/ellipse4.png';
// import Ellipse5 from '../../asset/images/ellipse/ellipse5.png';
// import Ellipse6 from '../../asset/images/ellipse/ellipse6.png';
// import Ellipse7 from '../../asset/images/ellipse/ellipse7.png';
// import Ellipse8 from '../../asset/images/ellipse/ellipse8.png';
// import Ellipse9 from '../../asset/images/ellipse/ellipse9.png';
// import Ellipse10 from '../../asset/images/ellipse/ellipse10.png';
// import Ellipse11 from '../../asset/images/ellipse/ellipse11.png';

// const imageRows = [
//   [Ellipse1, Ellipse2, Ellipse3, Ellipse4, Ellipse5, Ellipse6],
//   [Ellipse4, Ellipse7, Ellipse8, Ellipse9, Ellipse10, Ellipse11],
// ];

// const JoinTeamSection = () => {
//   return (
//     <section id="">
//       <Container className="pt-3">
//         <Row className="nine p-4">
//           {/* Left Column */}
//           <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
//             <h4 className="join">Join our team</h4>
//             <p>
//               Join our professional network of instructors<br />
//               parents & guardians
//             </p>
//             <Button variant="dark">Join the team</Button>
//           </Col>

//           {/* Right Column */}
//           <Col md={8} className="d-flex flex-column align-items-center">
//             {imageRows.map((row, rowIndex) => (
//               <Row key={`row-${rowIndex}`} className="justify-content-center g-2 pt-3">
//                 {row.map((imageSrc, imageIndex) => (
//                   <Col
//                     xs={4} // 3 images per row on small screens
//                     sm={3} // 4 images per row on medium screens
//                     md={2} // 6 images per row on larger screens
//                     className={`d-flex justify-content-center align-items-center image-wrapper ${
//                       imageSrc === Ellipse4 ? 'highlighted-ellipse4' :
//                       imageSrc === Ellipse6 ? 'highlighted-ellipse6' :
//                       imageSrc === Ellipse8 ? 'highlighted-ellipse8' : ''
//                     }`}
//                     key={`img-${rowIndex}-${imageIndex}`}
//                   >
//                     <Image
//                       src={imageSrc}
//                       alt={`Ellipse ${imageIndex + 1}`}
//                       className="rounded-circle img-fluid"
//                     />
//                   </Col>
//                 ))}
//               </Row>
//             ))}
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default JoinTeamSection;
