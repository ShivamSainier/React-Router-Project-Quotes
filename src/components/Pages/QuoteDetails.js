import React from 'react'
import {useParams} from "react-router-dom"
import {Route} from "react-router-dom"
import Comments from "../comments/Comments"

function QuoteDetails() {
    const params=useParams();
    return (
        <div>
            Quote Details
           
            <Route path={`/quotes/${params.quoteId}/comments`} exact>
                <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetails
