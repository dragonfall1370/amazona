import React from 'react'
import { useLocation, useParams } from 'react-router';

export default function CartScreen(props) {
    let { productId } = useParams();
    const { search } = useLocation();
    const qty = search ? Number(search.split('=')[1]) : 1

    return (
        <div>
            <h1>
                Cart Screen
            </h1>
            <p>
                ADD TO CART: ProductID: {productId} Qty: {qty}
            </p>
        </div>
    )
}
