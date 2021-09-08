import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../component/theme/theme";
import Home from "../home";
import ProductArchivePage from "../product/ProductArchivePage";
const Index = () => {
  return (
    <Switch>
      <ThemeProvider theme={theme}>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Home} />
        <Route path="/product/archvie" component={ProductArchivePage} />
      </ThemeProvider>
    </Switch>
  );
};

export default Index;
