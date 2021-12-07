import { Fragment } from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import {useHistory,useLocation} from 'react-router-dom'

const QuoteList = (props) => {
  const history=useHistory();
  const location=useLocation();
  const queryParams=new URLSearchParams(location.search)
  const isSortingAscending=queryParams.get('sort')=='asc';
  console.log(location)
  const changeSortingHendler=()=>{
    history.push('/quotes?sort='+(isSortingAscending?'desc':'asc'))
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
      <button onClick={changeSortingHendler}>Sort {isSortingAscending?'Descending':'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
