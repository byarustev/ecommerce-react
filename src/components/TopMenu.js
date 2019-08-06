import React from 'react';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import fetchDepartments from '../redux/actions/departments';

class TopMenu extends React.Component{
    
    componentDidMount(){
        const {fetchDepartments} = this.props;
        fetchDepartments();
    }

    render(){
        const {isLoading,departments,error} = this.props;
        return (
            <React.Fragment>
            <Container className="top-info">
                <Row>
                    <Col>Hey! <Button  variant="link"  >Sign In</Button> or <Button  variant="link">Register</Button></Col>
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