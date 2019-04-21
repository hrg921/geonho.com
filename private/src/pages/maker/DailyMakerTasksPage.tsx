import React from 'react';

import DailyMakerTaskForm from '../../components/daily-maker/DailyMakerTaskForm';
import FunctionedDailyMakerTaskList from '../../components/FunctionedDailyMakerTaskList';

export default class DailyMakerTasksPage extends React.PureComponent {
  public render() {
    return (
      <>
        <DailyMakerTaskForm />
        <FunctionedDailyMakerTaskList />
      </>
    );
  }
}
