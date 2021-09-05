import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fef7f6",
    padding: "10px 0",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  spanClass: {
    color: "#000",
    display: "inline-block",
    fontSize: "11px",
    textTransform: "uppercase",
    position: "relative",
    paddingRight: "15px",
    alignRight: true,
  },
  formControl: {
    color: "#000",
    display: "inline-block",
    fontSize: "11px",

    textTransform: "uppercase",
    position: "relative",
    margin: "0",
  },
  selectEmpty: {
    color: "#000",
    position: "relative",
    display: "inherit",
    fontSize: "11px",
  },
  anchorTag: {
    border: "none",
    color: "#000",
  },
}));

const TopNavBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    lang: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={classes.spanClass}>
              <span>Phone: +01 256 25 235</span>
              <span>email: info@eiser.com</span>
            </div>
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end">
            <div>
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                color="inherit"
                className={classes.spanClass}
              >
                gift card
              </Link>

              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                color="inherit"
                className={classes.spanClass}
              >
                track order
              </Link>

              <FormControl className={classes.formControl}>
                <NativeSelect
                  value={state.lang}
                  onChange={handleChange}
                  name="lang"
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "lang" }}
                  disableUnderline
                >
                  <option value="">english</option>
                  <option value={"Freance"}>Freance</option>
                  <option value={"Spanis"}>Spanis</option>
                </NativeSelect>
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TopNavBar;
