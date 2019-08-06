import React from 'react';
import {ListGroup} from 'react-bootstrap';
import fetchCategories from '../redux/actions/categories';
import {connect} from 'react-redux';

class SideMenu extends React.Component{
    
    componentDidMount(){
        const {fetchCategories} = this.props;
        fetchCategories(1);
    }

    render(){
        const {isLoading, error, categories} = this.props;
        console.log(categories, 'cats');
        return(
            <ListGroup as="ul" className='side-menu'>
                {
                   error &&  <ListGroup.Item as="li">Opps Error occured</ListGroup.Item>
                }
                {
                    isLoading &&  <ListGroup.Item as="li">Loading ...</ListGroup.Item>
                }
                {
                    categories.map((cat,index)=>(
                        <ListGroup.Item as="li" key={`${index}-${cat.category_id}`}>
                        <a href={`/category/${cat.category_id}`}>{cat.name}</a>
                        </ListGroup.Item>
                    ))
                }
                
            </ListGroup>
        )
    }
}
SideMenu.defaultProps={
    categories:[]
};

const mapStateToProps=(state)=>({
    isLoading: state.categories.isLoading,
    categories: state.categories.categories,
    error: state.categories.error
});

export default connect(mapStateToProps,{fetchCategories})(SideMenu);