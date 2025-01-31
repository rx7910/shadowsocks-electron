import React from "react";
import {
  TextareaAutosize,
  TextareaAutosizeProps
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";

export interface TextAreaProps extends TextareaAutosizeProps {
  onTextChange?: (text: string) => void;
}

const StyledTextareaAutosize = React.memo(function StyledTextareaAutosize(props: TextAreaProps) {
  const useStyles = makeStyles((theme: Theme) => createStyles({
    textarea: {
      width: '100%',
      border: `solid 1px ${theme.palette.type === 'dark' ? grey[700] : 'lightgrey'}`,
      outline: 'none',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.type === 'dark' ? grey[400] : grey[900],
    }
  }));

  const onInnerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.onTextChange) {
      return props.onTextChange(event.target.value);
    }
  }

  const TextArea = (props: TextAreaProps) => {
    const { onTextChange, ...rest } = props;
    const classes = useStyles();

    return <TextareaAutosize {...rest} className={classes.textarea} onChange={onInnerChange}/>
  };

  return <TextArea {...props}/>;
});

export default StyledTextareaAutosize;
