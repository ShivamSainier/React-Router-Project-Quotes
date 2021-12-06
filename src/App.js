import react from "react";
import {Route,Switch,Redirect} from "react-router-dom"
import AllQuotes from "./components/Pages/AllQuotes";
import NewQuote from "./components/Pages/NewQuote"
import QuoteDetails from "./components/Pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import NotFound from "./components/Pages/NotFound";

function App() {
  return (
    <div>
      <Layout>
      <Switch>
        <Route path="/quotes" exact><AllQuotes /></Route>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote" exact>
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </Layout>

    </div>
  );
}

export default App;
