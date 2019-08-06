import React from 'react';
import fetchProducts from '../redux/actions/products';
import {connect} from 'react-redux';
import {Col} from 'react-bootstrap';
import Product from '../components/product';

class ProductsContainer extends React.Component{

    componentDidMount(){
        const {page, limit, description_length, fetchProducts} = this.props;
        fetchProducts({page,limit,description_length});
    }

    render(){
        const { products, error, isLoading } = this.props;
        
        return (
            <React.Fragment>
                {products.rows &&
                    products.rows.map((product, index)=>( 
                    <Product 
                        key={`${index}-${product.product_id}`} 
                        title={product.name}
                        description={product.description}
                        price={product.price}
                        discounted_price= {product.discounted_price}
                        image={product.thumbnail}
                        />
                    ))
                }
            </React.Fragment>
        )
    }
}

ProductsContainer.defaultProps={
    products:[],
    page:1,
    limit:20,
    description_length:200
};

const mapStateToProps=(state)=>({
    isLoading: state.products.isLoading,
    products: state.products.products,
    error: state.products.error
});

export default connect(mapStateToProps, {fetchProducts})(ProductsContainer);
