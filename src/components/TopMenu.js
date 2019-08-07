import React from 'react';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import fetchDepartments from '../redux/actions/departments';
import Modal from './commons/modal';

class TopMenu extends React.Component{
    state={
        showLogin:false,
        showSignup:false,
    }

    componentDidMount(){
        const {fetchDepartments} = this.props;
        fetchDepartments();
    }

    handleClose=(modal)=>{
        if(modal==='login'){
            this.setState({showLogin:false});
        }else if(modal==='signup'){
            this.setState({showSignup:false});
        }
    }

    handleShow=(modal)=>{
        if(modal==='login'){
            this.setState({showLogin:true});
            this.setState({showSignup:false});
        }else if(modal==='signup'){
            this.setState({showSignup:true});
            this.setState({showLogin:false});
        }
    }

    loginFormFields=()=> (
        <React.Fragment>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        </React.Fragment>
    );
    
    signupFormFields=()=> (
        <React.Fragment>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        </React.Fragment>
    );

    render(){
        const {isLoading,departments,error} = this.props;
        return (
            <React.Fragment>
            <Container className="top-info">
                <Row>
                    <Col>Hey! <Button  variant="link" onClick={()=>this.handleShow('login')}  >Sign In</Button> or <Button onClick={()=>this.handleShow('signup')} variant="link">Register</Button></Col>
                    <Col xs={6}><span >Daily Deals</span> <span>Sell</span> <span>Help Contact</span></Col>
                    <Col>
                    3 of 3
                    <span>$ 0.0</span>
                    </Col>
                </Row>
            </Container>  
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">SHOPMATE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                    {
                        isLoading && <span>Loading ...</span>
                    }
                    {
                        error && <span>Oppps </span>
                    }
                    {departments.length>0 &&
                        departments.map((dept,index)=>{
                            return <Nav.Link href={`/department/${dept.department_id}`} key={`${index}-${dept.department_id}`}>{dept.name}</Nav.Link>
                        })
                    }
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Modal
                show={this.state.showSignup}
                handleShow={()=>this.handleShow('signup')}
                handleClose={()=>this.handleClose('signup')}
                title='signup'
                children={this.signupFormFields()}
            />
            <Modal
                show={this.state.showLogin}
                handleShow={()=>this.handleShow('login')}
                handleClose={()=>this.handleClose('login')}
                children={this.loginFormFields()}
                title='login'
            />
            </React.Fragment>
        )
    }
}

TopMenu.defaultProps={
    departments:[]
}

const mapStateToProps=(state)=>({
    isLoading: state.departments.isLoading,
    departments: state.departments.departments,
    error: state.departments.error
});

export default connect(mapStateToProps,{fetchDepartments})(TopMenu);