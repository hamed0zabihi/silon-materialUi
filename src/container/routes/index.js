import { Route, Switch } from "react-router-dom";
import Home from "../home";
const Index = () => {
    return (     <Switch>
    
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Home} />
     
      </Switch> );
}
 
export default Index;