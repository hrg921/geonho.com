import { List, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { MakerTaskDetail } from '../../graphqls/schema';
import DailyMakerTaskListItem from './DailyMakerTaskListItem';

interface Props {
  makerTasks: MakerTaskDetail[];
  onDeleteButtonClicked(id: string): void;
}

export default class DailyMakerTaskList extends React.PureComponent<Props> {
  public render() {
    const { makerTasks, onDeleteButtonClicked } = this.props;
    console.log(makerTasks);

    return (
      <Container>
        <List>
          {makerTasks.map(makerTask => (
            <DailyMakerTaskListItem
              {...{ makerTask }}
              onDeleteButtonClicked={() => onDeleteButtonClicked(makerTask._id)}
            />
          ))}
        </List>
      </Container>
    );
  }
}

const Container = styled.div``;
