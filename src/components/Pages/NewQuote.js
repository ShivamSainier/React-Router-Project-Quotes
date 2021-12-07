import React from 'react'
import QuoteForm from '../quotes/QuoteForm'
import {useHistory} from 'react-router-dom'

function NewQuote() {
    const history=useHistory();
    const onAddQuote=(data)=>{
        console.log(data)
        history.push('/quotes')
    }
    
    
    return (
        <QuoteForm onAddQuote={onAddQuote} />
    )
}

export default NewQuote
