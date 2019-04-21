import { IconButton } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import React from 'react';

interface Props {
  onClick: (event: React.MouseEvent) => void;
}

export default class DeleteDailyMakerTaskButton extends React.PureComponent<
  Props
> {
  public render() {
    const { onClick } = this.props;
    return (
      <IconButton onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    );
  }
}
