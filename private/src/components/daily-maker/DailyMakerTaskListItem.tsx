import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import React from 'react';
import { MakerTaskDetail } from '../../graphqls/schema';
import DeleteDailyMakerTaskButton from './DeleteDailyMakerTaskButton';

interface Props {
  makerTask: MakerTaskDetail;
  onDeleteButtonClicked: (event: React.MouseEvent) => void;
}

export default class DailyMakerTaskListItem extends React.PureComponent<Props> {
  public render() {
    const { makerTask, onDeleteButtonClicked } = this.props;
    const { title } = makerTask;
    return (
      <ListItem button>
        <ListItemText>{title}</ListItemText>
        <ListItemSecondaryAction>
          <DeleteDailyMakerTaskButton onClick={onDeleteButtonClicked} />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}
