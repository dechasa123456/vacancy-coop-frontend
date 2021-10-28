import React from 'react';
import {Card, Col, Container, Row, Form, Button, InputGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Search from '../Containers/Search';

class Home extends React.Component {
    render() { 
        return (
            <React.Fragment>
             
                <br />
                <Search />
               <br />
               
          <Container>
             <br />
                <Card body style={{backgroundColor:"#f5f5f5"}}>
               <Row className="justify-content-md-center">
                <Col sm={12}>
             <Link to="/detailVacancy/5" style={{textDecoration:"none",color:"black"}}>
              <p><b><u>IT Support Officer</u></b></p><ul><li><b>&nbsp;Duty Station: </b></li><li>North Finfinne District Office</li><li>South Finfinne District office</li><li> Hossana District Office&nbsp;</li><li> Chiro District Office </li><li>Asalla District Office</li></ul><p><b>Required Competency</b></p><p>DC facility administration, including HVAC, Power systems, Generators, Fire suppression systems, etc.</p><ul><li>Certification or Training on DC facilities operation</li><li> Organizational and mentoring skills</li><li>Positive attitude to work and change.Strong collaboration ethic, with ability to collaborate with teams from cross-functional disciplines...</li></ul>
               </Link>
                </Col>
               <Col sm ={9}></Col>
               <Col sm ={3}>
              <Link size="sm" to="/detailVacancy/5" style={{color:"#54cbf0",textDecoration:"none"}}>View details</Link>
              </Col>
               </Row>
                </Card>
             <br />
                <Card body>
               <Row className="justify-content-md-center">
                <Col sm={12}>
             <Link to="/detailVacancy/2" style={{textDecoration:"none",color:"black"}}>
                <p><b><u>Customer Service Officer</u></b></p><p><b>Duty Station:&nbsp;</b></p><ul><li><b>&nbsp;Branches Under Adama District </b></li><li><b>Branches Under Central Finfinne District</b></li><li><b>Branches Under East Finfinne District</b></li><li><b>Branches Under North Finfinne District</b></li><li><b>Branches Under South Finfinne District</b></li><li><b> Branches Under West Finfinne District</b></li></ul><p><b>Required Competency</b></p><ul><li>&nbsp;Proven selling skill,</li><li> Communication skill,Marketing skill,Basic information technology skill...</li></ul>
               </Link>
                

                </Col>
                <Col sm ={9}></Col>
                <Col sm ={3}>
                <Link size="sm" to="/detailVacancy/2" style={{color:"#54cbf0",textDecoration:"none"}}>View details</Link>
                </Col>
               </Row>
                </Card>
             <br />
                <Card body style={{backgroundColor:"#f5f5f5"}}>
               <Row className="justify-content-md-center">
             <Link to="/detailVacancy/1" style={{textDecoration:"none",color:"black"}}>
                <Col sm={12}>
                <div><b>&nbsp;Branch Manager II</b></div><div><b>Duty Station: Shashamane District</b></div><div>&nbsp; <b>&nbsp; &nbsp;Required Competency&nbsp;</b></div><ul><li>Understanding the Banking Business: Applying knowledge of business and the marketplace to advance the bank’s goals.</li><li>Making Complex Decisions: Making good and timely decisions that keep the bank moving forward;</li><li>Taking Initiatives: Taking on new opportunities and tough challenges with a sense of urgency, high energy, and enthusiasm;</li><li>Managing Execution: Providing direction, delegating, and removing obstacles to get work done;</li><li>Ensuring Accountability: Holding oneself and others accountable for meeting commitments;</li><li>Driving Results: Consistently achieving results, even under tough circumstances</li><li> Managing Conflict: Handling conflict situations effectively, with a minimum of noise.</li><li>Influencing People: Creating a climate where people are motivated to do their best to help the bank to achieve its objectives;</li><li> Building Collaborative Relationships: Building strong-identity teams that apply their diverse skills and perspectives to achieve common goals;</li><li> Being Flexible and adaptable: Operating effectively, even when things are not certain, or the way forward is not clear...</li></ul>

                </Col>
               </Link>
               <Col sm ={9}></Col>
               <Col sm ={3}>
              <Link size="sm" to="/detailVacancy/1" style={{color:"#54cbf0",textDecoration:"none"}}>View details</Link>
              </Col>
               </Row>
                </Card>
             <br />
                <Card body>
               <Row className="justify-content-md-center">
             <Link to="/detailVacancy/3" style={{textDecoration:"none",color:"black"}}>
                <Col>
                <div><b>&nbsp;KYC Officer</b></div><div><b>• Duty Station: Head Office</b></div><div><b>Required Competency&nbsp;</b></div><ul><li>Maintains a commitment to honesty; models social, ethical, and organizational values; firmly adheres to codes of conduct and ethical principles;</li><li>The ability to discover the needs of internal and external customers and strive to deliver services and products to meet these needs in a professional and courteous manner. </li><li>Works effectively with and supports colleagues, fostering a positive and collaborative environment.</li><li>Actively pursues technical and personal self-development on an ongoing basis;</li><li>Giving high concern for optimal operations, making effective decisions (business) with a less possible cost, or efficiently</li><li>Able to value communities' values, norms and beliefs and act to discharge responsibilities to obey and serve the community in which the bank operates to earn public credibility.</li></ul><div><b>Major Responsibilities</b></div><ul><li>Responsible for all KYC related matters including undertaking assessment of the bank’s system and procedure;</li><li>Ensures that every depositor of the bank has been assigned with one unique customer ID regardless of the deposit type or deposit holder until National ID system...</li></ul>

                </Col>
               </Link>
               <Col sm ={9}></Col>
               <Col sm ={3}>
              <Link size="sm" to="/detailVacancy/3" style={{color:"#54cbf0",textDecoration:"none"}}>View details</Link>
              </Col>
               </Row>
                </Card>
             <br />
                <Card body style={{backgroundColor:"#f5f5f5"}}>
               <Row className="justify-content-md-center">
             <Link to="/detailVacancy/4" style={{textDecoration:"none",color:"black"}}>
                <Col>
              <div><b>Position: Manager , KYC Team</b></div><div><b>Duty Station: HO</b></div><div><b>Required Competency</b></div><ul><li>Ability to understand the banking business to apply knowledge of business and the marketplace to advance the bank’s goals;</li><li>Able to make good and timely decisions that keep the bank moving forward;</li><li>Ability to take on new opportunities and tough challenges with a sense of urgency, high energy, and enthusiasm;</li><li>Execution capability through providing direction, delegating, and removing obstacles to get work done;</li><li>Able to ensure accountability through holding oneself and others accountable for meeting commitments;</li><li>Ability in driving results by consistently achieving results, even under tough circumstances;</li><li>Ability in managing conflict by handling conflict situations effectively, with a minimum of noise...</li></ul>

                </Col>
               </Link>
               <Col sm ={9}></Col>
               <Col sm ={3}>
              <Link size="sm" to="/detailVacancy/4" style={{color:"#54cbf0",textDecoration:"none"}}>View details</Link>
              </Col>
               </Row>
                </Card>
               <br />
               <Row className="justify-content-md-center">
                <Col sm="auto">
             <Button className="btn btn-info">Load More</Button>
               </Col>
              </Row>
              <br />
              <br />
              <br />
              <br />
          </Container>
         </React.Fragment>
        );
    }
}
 
export default Home ;