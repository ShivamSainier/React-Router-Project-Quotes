import React from 'react'
import {useParams} from "react-router-dom"
import {Route} from "react-router-dom"
import Comments from "../comments/Comments"
import HighlightedQuote from "../quotes/HighlightedQuote";


const dummy_data=[
    {id:'q1',text:'money heist',author:'Netflix'},
    {id:'q2',text:'Squaid Games',author:'Netflix'},
    {id:'q3',text:'I am not Okey with this' ,author:'Netflix'}
]

function QuoteDetails() {
    const params=useParams();
    const quote_data=dummy_data.find(quote=>quote.id==params.quoteId)
    if(!quote_data){
        return(<p>No quote Data</p>)
    }
    return (
        <div>
            Quote Details
            <HighlightedQuote text={quote_data.text} author={quote_data.author} />
            <Route path={`/quotes/${params.quoteId}/comments`} exact>
                <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetails
