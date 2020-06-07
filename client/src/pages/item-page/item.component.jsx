import React from 'react'
import { connect } from 'react-redux'
import ItemDetail from '../../components/item-detail/item-detail.component'
import { Route } from "react-router-dom";


const ItemPage = ({ match }) => {
    return (
        <div className='item-page'>
            <Route path={`${match.path}/:itemId`} component={ItemDetail} ></Route>
        </div>
    )
}

export default connect(null, null)(ItemPage)