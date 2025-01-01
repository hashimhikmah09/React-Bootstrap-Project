// import React from "react";
// import { Container, Row, Col, Card, CardBody, Image } from "react-bootstrap";
// import TopCard from "../TopSmallCards/UpperComponents";
// import Build1 from "../../asset/images/smallCards/build1.jpeg";
// import Build2 from "../../asset/images/smallCards/build2.jpeg";
// import Build3 from "../../asset/images/smallCards/build3.jpeg";
// import Build4 from "../../asset/images/smallCards/build4.jpeg";
// import Build5 from "../../asset/images/smallCards/build5.jpeg";
// import Build6 from "../../asset/images/smallCards/build6.jpeg";
// import '../../asset/styles/SmallCards.css';

// const BuildSmallCards = () => {
//     return (
//         <div>
//             <Container>
//                 <h2 className="txt">Courses Portal<span className="soon">(Coming Soon)</span></h2>
//                 <p className="promise">Promising up-and-coming extensions to try out</p>
//                 <Row>
//                     <Col md={4}>
//                         <Card className="smallcard">
//                             <CardBody>
//                                 <div>
//                                     <TopCard />
//                                 </div>
//                                 <Image
//                                     src={Build1}
//                                     alt="build1"
//                                     className="rounded img-fluid"
//                                 />
//                             </CardBody>
//                         </Card>
                        
//                     </Col>
//                     <Col md={4} >
//                         <Card className="">
//                             <CardBody>
//                                 <div>
//                                     <TopCard />
//                                 </div>
//                                 <Image
//                                     src={Build2}
//                                     alt="build1"
//                                     className="rounded img-fluid"
//                                 />
//                             </CardBody>
//                         </Card>
                        
//                     </Col>
//                     <Col md={4}>
//                         <Card>
//                             <CardBody>
//                                 <div>
//                                     <TopCard />
//                                 </div>
//                                 <Image
//                                     src={Build3}
//                                     alt="build1"
//                                     className="rounded img-fluid"
//                                 />
//                             </CardBody>
//                         </Card>
                        
//                     </Col>
//                 </Row>
//                 <Row className="mt-3">
//                     <Col md={4}>
//                         <Card>
//                             <CardBody>
//                                 <div>
//                                     <TopCard />
//                                 </div>
//                                 <Image
//                                     src={Build4}
//                                     alt="build1"
//                                     className="rounded img-fluid"
//                                 />
//                             </CardBody>
//                         </Card>
                        
//                     </Col>
//                     <Col md={4}>
//                         <Card>
//                             <CardBody>
//                                 <div>
//                                     <TopCard />
//                                 </div>
//                                 <Image
//                                     src={Build5}
//                                     alt="build1"
//                                     className="rounded img-fluid"
//                                 />
//                             </CardBody>
//                         </Card>
                        
//                     </Col>
//                     <Col md={4}>
//                         <Card>
//                             <CardBody>
//                                 <div>
//                                     <TopCard />
//                                 </div>
//                                 <Image
//                                     src={Build6}
//                                     alt="build1"
//                                     className="rounded img-fluid"
//                                 />
//                             </CardBody>
//                         </Card>
                        
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default BuildSmallCards;

import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import TopCard from "../TopSmallCards/UpperComponents";
import Build1 from "../../asset/images/smallCards/build1.jpeg";
import Build2 from "../../asset/images/smallCards/build2.jpeg";
import Build3 from "../../asset/images/smallCards/build3.jpeg";
import Build4 from "../../asset/images/smallCards/build4.jpeg";
import Build5 from "../../asset/images/smallCards/build5.jpeg";
import Build6 from "../../asset/images/smallCards/build6.jpeg";
import '../../asset/styles/SmallCards.css';

const BuildSmallCards = () => {
    return (
        <div>
            <Container>
                <h2 className="txt">Courses Portal<span className="soon">(Coming Soon)</span></h2>
                <p className="promise">Promising up-and-coming extensions to try out</p>
                <Row>
                    {[Build1, Build2, Build3, Build4, Build5, Build6].map((image, index) => (
                        <Col md={4} key={`build-${index}`} className="mb-4">
                            <Card className="smallcard">
                                <Card.Body>
                                    <TopCard />
                                    <Image
                                        src={image}
                                        alt={`build${index + 1}`}
                                        className="rounded img-fluid build-img"
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default BuildSmallCards;
