import React from 'react';
import {ListGroup} from 'react-bootstrap';

class SideMenu extends React.Component{
    render(){
        return(
            <ListGroup as="ul" className='side-menu'>
                <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        )
    }
}

export default SideMenu;