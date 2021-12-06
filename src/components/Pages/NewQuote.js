import React from 'react'
import QuoteForm from '../quotes/QuoteForm'

function NewQuote() {
    const onAddQuote=(data)=>{
        console.log(data)

    }
    return (
        <QuoteForm onAddQuote={onAddQuote} />
    )
}

export default NewQuote
