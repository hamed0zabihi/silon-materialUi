import React from "react";
import { Grid } from "@material-ui/core";
import AndroidSection from "./AndroidSection";
import SocialIconSection from "./SocialIconSection";

const WidgetSection = () => {
  return (
    <Grid item xs={12} md={3}>
      <AndroidSection />
      <SocialIconSection />
    </Grid>
  );
};

export default WidgetSection;
