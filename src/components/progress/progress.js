import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const ProgressBarComponent = (props) => {
  const { progressValue } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="static"
        value={progressValue}
        color={props.color}
      />
    </div>
  );
};

export default ProgressBarComponent;
