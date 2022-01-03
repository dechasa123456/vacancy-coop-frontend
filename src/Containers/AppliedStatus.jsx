import React, { Component } from 'react';
import { Alert, Container, Card, Row } from 'react-bootstrap';
import Search from './Search';
class AppliedStatus extends Component {
    state={
        searchStatus:null
    }

    componentDidCatch=()=>{
        const autoId=this.props.autoID;
    }

    render() { 
        return (
        <React.Fragment>
        <br />
        <Search />
        <br />
        <Container>
   
        <Row className="justify-content-md-center">
        <Alert key={1} variant="warning">Your vacancy hasn't seen. Try to see after a few days!</Alert>
      </Row>
     </Container>
    </React.Fragment>
        );
    }
}
 
export default AppliedStatus;