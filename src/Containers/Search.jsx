import axios from 'axios';
import React, { Component } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import {Redirect } from 'react-router-dom';

class Search extends Component {
    state={
        searchStatus:null,
        isAutoId:false
    }
    constructor(){
        super();
        this.handleSubmitSearch=this.handleSubmitSearch.bind(this);
    }
    handleSubmitSearch=(e)=>{
        e.preventDefault();
        const data={
            auto_id:this.autoID,
        };
        try {
            axios.post('/search_result',data).then(res=>{
                // console.log(res.data);
                if(res.data.length){
                //   alert(res.data.length)
                this.setState({isAutoId:true});
            } else {
                this.setState({searchStatus:"Registration ID is wrong!"});

            }
            });
           } catch(err){
            }
    }
    render() { 
        if(this.state.isAutoId) return (<Redirect to="/my_vacancy_status"/>);
        return (
            <Card body>
            <Form onSubmit={this.handleSubmitSearch}>
            <Row>
             <Col sm={3}>
            <img src="../../logo.png"/>
             </Col>
             <Col sm={9}>
             <InputGroup className="mb-2">
             <Form.Control type="number" onChange={(e=>this.autoID=e.target.value)} aria-describedby="inputGroupPrepend" 
             placeholder="Search status of vacancy by registration ID..." />
             <InputGroup.Text id="inputGroupPrepend">  <Button type="submit" className="btn btn-info" style={{color:"#fff"}}>Seacrh</Button></InputGroup.Text>
            </InputGroup>
             <div style={{color:"red"}}>{this.state.searchStatus}</div>
             </Col>
             </Row>
            </Form>
             </Card>
        )
    }
}
 
export default Search;