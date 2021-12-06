import React from 'react'
import QuoteList from '../quotes/QuoteList'
import {useState} from "react"

const dummy_data=[
    {id:'q1',text:'money heist',author:'Netflix'},
    {id:'q2',text:'Squaid Games',author:'Netflix'},
    {id:'q3',text:'I am not Okey with this' ,author:'Netflix'}
]

function AllQuotes() {
    const [data,newData]=useState(dummy_data)
    return (
        <QuoteList quotes={data} />
        
    )
}

export default AllQuotes
