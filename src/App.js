import react from "react";
import {Route,Switch,Redirect} from "react-router-dom"
import AllQuotes from "./components/Pages/AllQuotes";
import NewQuote from "./components/Pages/NewQuote"
import QuoteDetails from "./components/Pages/QuoteDetails";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/quotes" exact><AllQuotes /></Route>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes/:quoteId" exact>
          <QuoteDetails />
        </Route>
        <Route path="/new-quote" exact>
          <NewQuote />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
