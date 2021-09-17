import React from "react";
import {
  makeStyles,
  Typography,
  CardMedia,
  Card,
  CardContent,
  Link,
  CardActions,
  Grid,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import CategoryIcon from "@material-ui/icons/Category";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: { border: "none", boxShadow: "none" },
  media: { height: "auto", marginBottom: "25px" },
  blogDate: {
    position: "relative",
    paddingLeft: "22px",
    fontSize: "13px",
    color: "#888",
    display: "inline-block",
    lineHeight: "18px",
    "&:hover": { textDecoration: "none", color: "#ff5353" },
    "&::before": {
      content: '""',
      position: "absolute",
      top: "6px",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "#ff5353",
      borderRadius: "2px",
      width: "12px",
      height: "6px",
    },
  },
  title: {
    width: "100%",
    fontSize: "20px",
    lineHeight: "30px",
    borderBottom: "1px solid #e1e1e1",
    paddingBottom: "20px",
    marginBottom: "20px",
    wordWrap: "break-word",
    "& a": {
      color: "#000",
    },
  },
  postMeta: {
    color: "#888",
    display: "inline-block",
    fontSize: "14px",
    lineHeight: "18px",
    textDecoration: "none",

    "& a": {
      color: "#888",
      textDecoration: "none",
      "& :hover": { color: "#ff5353", textDecoration: "none" },
    },
  },
  cardActionClass: { padding: "0" },
  category: { marginRight: " 25px", color: "#000" },
  link: {
    color: "#00ff00",
    "&:hover": {
      textDecoration: "none",
      color: "#ff5353",
    },
  },
});
const CardBlog = (props) => {
  const {
    image = "/img/post/1.jpg",
    date = "07 July, 2019",
    title = " Were divided land his creature which have evening subdue",
    category = "Women Fashion",
    numberComment = "2",
  } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent style={{ padding: "0" }}>
        <Typography>
          <Link
            href="/#"
            className={classes.blogDate}
            onClick={(e) => e.preventDefault()}
          >
            {date}
          </Link>
        </Typography>
        <Typography variant="h3" className={classes.title}>
          <Link
            href="/#"
            onClick={(e) => e.preventDefault()}
            className={classes.link}
          >
            {title}
          </Link>
        </Typography>
        <CardActions className={classes.cardActionClass}>
          <Grid>
            <Box className={classes.postMeta}>
              <Link
                href="/#"
                onClick={(e) => e.preventDefault()}
                className={classes.link}
              >
                <IconButton
                  aria-label="category"
                  aria-controls="category"
                  aria-haspopup="true"
                  style={{ paddingLeft: "0" }}
                >
                  <CategoryIcon fontSize="small" />
                </IconButton>
                {category}
              </Link>
              <Link
                href="/#"
                onClick={(e) => e.preventDefault()}
                className={classes.link}
              >
                <IconButton
                  aria-label="comments"
                  aria-controls="comments"
                  aria-haspopup="true"
                >
                  <QuestionAnswerOutlinedIcon fontSize="small" />
                </IconButton>
                {numberComment} comments
              </Link>
            </Box>
          </Grid>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CardBlog;
