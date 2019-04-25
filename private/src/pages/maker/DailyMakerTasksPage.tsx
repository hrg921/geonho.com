import React from 'react';
import styled from 'styled-components';
import DailyMakerTaskForm from '../../components/daily-maker/DailyMakerTaskForm';
import FunctionedDailyMakerTaskList from '../../components/FunctionedDailyMakerTaskList';
import { Typography } from '@material-ui/core';

export default class DailyMakerTasksPage extends React.PureComponent {
  public render() {
    return (
      <Container>
        <Typography variant="h2">Daily Maker Tasks Page</Typography>
        <DailyMakerTasksSection>
          <DailyMakerTaskForm />
          <FunctionedDailyMakerTaskList />
        </DailyMakerTasksSection>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 800px;
  margin: 40px auto 0 auto;

  h2 {
    color: white;
  }
`;

const DailyMakerTasksSection = styled.section`
  margin-top: 20px;
  padding: 16px;
  background-color: #eeeeee;
`;
