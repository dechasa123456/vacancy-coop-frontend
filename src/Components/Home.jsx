import React from 'react';
import {Card, Col, Container, Row, Form, Button, InputGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Search from '../Containers/Search';
import parse from 'html-react-parser';
import axios from 'axios';
class Home extends React.Component {
   //latest_vacancy parse(res.data[0].vacancy_description)
   state = {
      rowsData:[]
   }
   componentDidMount()
   {

        axios.get('/latest_vacancy').then(res=>{
          this.setState({rowsData:res.data});
         //  alert(id)
         console.log(res.data);
         })
       
   }
    render() { 
        return (
            <React.Fragment>
             
                <br />
                <Search />
               <br />
               
          <Container>
             <br />
             { this.state.rowsData.map((row,i)=>(
                <React.Fragment>
                <Card body style={{backgroundColor:"#f5f5f5"}} key={i}>
               <Row className="justify-content-md-center">
                  <Col sm={4}><b>Position: {row.vacancy_position}</b> </Col>
                  <Col sm={2}>| EXP: {row.vacancy_experience}  </Col>
                  <Col sm={2}>| {row.vacancy_employee_type} </Col>
                  <Col sm={2}>| {row.vacancy_type}</Col>
                  <Col sm={2} style={{color:"red"}}>| {row.days>=0?row.days+' days reamin':'Closed'}</Col>
                  <hr />
                <Col sm={12}>
             <Link to={`/detailVacancy/${row.vacancy_id}`} style={{textDecoration:"none",color:"black"}}>
               {parse(row.vacancy_description)}
               </Link>
                </Col>
               <Col sm ={9}></Col>
               <Col sm ={3}>
              <Link size="sm" to={`/detailVacancy/${row.vacancy_id}`} style={{color:"#54cbf0",textDecoration:"none"}}>View details</Link>
              </Col>
               </Row>
                </Card>
                <br />
                </React.Fragment>
             ))}
               <Row className="justify-content-md-center">
                <Col sm="auto">
             <Button className="btn btn-warning" style={{color:"#fff"}}>Load More</Button>
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