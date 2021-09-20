import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../../component/theme/theme";
import Home from "../home";
import ProductArchivePage from "../product/ProductArchivePage";

const Index = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Home} />
        <Route path="/product/archvie" component={ProductArchivePage} />
      </Switch>
    </ThemeProvider>
  );
};

export default Index;
