import React from 'react'
import {useParams} from "react-router-dom"

function QuoteDetails() {
    const params=useParams();
    return (
        <div>
            Quote Details
            <h2>{params.quoteId}</h2>
        </div>
    )
}

export default QuoteDetails
