import axios from 'axios';
import React from 'react';
import {Card, Col, Container, Row, Form, Button, InputGroup, Popover, OverlayTrigger, Tooltip, Modal, Alert} from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom';
import parse from 'html-react-parser';
import Swal from 'sweetalert2';
import Search from '../Containers/Search';

class DetailVacancy extends React.Component {
    state={
        id:null,
        rowsData:null,
        showCertificate:false,
        toHome:false,
        isApplied:false
    }
    constructor(){
        super();
        this.handleSubmitApplying = this.handleSubmitApplying.bind(this);
    }
    handleCeritificate = (boln) => {
        this.setState({showCertificate:boln})
        }
    componentDidMount()
    {
         const id = this.props.match.params.id;
         const seeker_id = localStorage.getItem('seeker_id');
         this.setState({id:id})
         axios.get('/get_all_vacancy_info/'+id).then(res=>{
           this.setState({rowsData:parse(res.data[0].vacancy_description)});
           ((res.data[0].applied_vacn_id)?this.setState({isApplied:true}):this.setState({isApplied:false}));
          //  alert(id)
          })
        
    }
    handleSubmitApplying=(e)=>{
        e.preventDefault();
        const data={
            name:this.name,
            file:this.file,
            seeker_id:localStorage.getItem('seeker_id'),
            vacancy_id:this.state.id
        };
        try {
            axios.post('/save_apply',data).then(res=>{
              if(res.data[0].applied_vacancy_auto){
                  
                this.handleResponseToast(`Thank you! This is the registration ID,<span style="color:green">${res.data[0].applied_vacancy_auto}</span>. Don't forget this ID!`,true);
                this.setState({showCertificate:false});
                this.setState({toHome:true});
              }
            });
           } catch(err){
            this.handleResponseToast('OOPS! Try again',false);
            }
    }
    handleResponseToast=(msg,status)=>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 50000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        if (status) {
            Toast.fire({
          icon: 'success',
          title: msg
        })
      } else {
        Toast.fire({
          icon: 'error',
          title: msg
        })
      }
       }
  
    render() { 
        var apply='';
        if (!localStorage.getItem('seeker_id')) {
             apply=(
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Before apply, please Login or Sign Up!</Tooltip>}>
                <span className="d-inline-block">
                <div className="d-grid gap-1">
               <Button   variant="info" style={{color:"#fff",pointerEvents: 'none' }} >Apply</Button>
               </div>
                </span>
               </OverlayTrigger>
            );
        } else if(this.state.isApplied) {
         
          apply=(
            <div className="d-grid gap-1" style={{color:"green"}}>You have applied!</div>
                )
        } else {
            apply=(
            <div className="d-grid gap-1">
            <Button size = "lg" variant="info" style={{color:"#fff"}} onClick={(e=>this.handleCeritificate(true))} >Apply Now</Button>
            </div>
            );
        }

        if(this.state.toHome) return <Redirect to="/" />;
        if (!this.state.rowsData) return(<Alert key={1} variant="warning">There is no detail vacancy, <Link to="/">Click here</Link> to check again vacancy</Alert>);
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
                    {this.state.rowsData}
                </Col>
                <Col sm ={9}></Col>
               <Col sm ={3}>
              {apply}
              </Col>
               </Row>
                 </Card>
            
              <br />
              <br />
              <br />
              <br />
          </Container>
          <Modal
        size="lg"
        show={this.state.showCertificate}
        onHide={() => this.handleCeritificate(false)}
        aria-labelledby="example-modal-sizes-title-lg">
           <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Add some file for applying
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.handleSubmitApplying}>
        
        <Row>
        <Col sm={12}>
        <Form.Group type="date" className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label date="date">File Name<i style={{color:"red"}}>*</i></Form.Label>
        <Form.Control onChange={(e=>this.name=e.target.value)} />
        </Form.Group>
        </Col>
        <Col sm={12}>
        <Form.Group  className="mb-3">
        <Form.Label>File(i.e Graduation certificate)<i style={{color:"red"}}>*</i></Form.Label>
        <Form.Control type="file" className="form-control" onChange={(e=>this.file=e.target.files[0])}  />
      </Form.Group>
        </Col>
        </Row>
        <Row>
         <Col sm={3}>
        <Button variant="info" style={{color:"#fff"}} type="submit">Save</Button>
        </Col>
        </Row>
        </Form>
        </Modal.Body>
      </Modal>
         </React.Fragment>
        );
    }
}
 
export default DetailVacancy ;