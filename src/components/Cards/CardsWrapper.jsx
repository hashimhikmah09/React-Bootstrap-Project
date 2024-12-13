import React from "react";
//import { Contain} from "react-bootstrap";
//import '../../asset/styles/CardRender.css';


// const CardWrapper = ({title, imgSrc}) => {
//     return(
//         <Container>
//             <Row>
//                 <Col md={6} className="Card-image">
//                     <h5>{title}</h5>
//                     <img src={imgSrc} alt={title} className="Image" />
//                 </Col>
//             </Row>
//         </Container>
//     )
// }
// Card Component
const Card = ({ title, subtitle, imgSrc, imgAlt, cardClass }) => {
    return (
      <div className={`card ${cardClass}`}>
        <div className="card-title p-4">
          <h3 className={cardClass}>{title}<br />{subtitle}</h3>
        </div>
        <div className="card-img pup">
          <img 
            src={imgSrc} 
            alt={imgAlt} 
            className="img-fluid"  
          />
        </div>
      </div>
    );
  };


export default Card;

