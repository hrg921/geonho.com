import React from 'react';

import DailyMakerTaskForm from '../../components/DailyMakerTaskForm';
import {
  MakerTaskListQuery,
  MAKER_TASK_LIST,
} from '../../graphqls/Maker/queries';

export default class DailyMakerTasksPage extends React.PureComponent {
  public render() {
    return (
      <>
        <DailyMakerTaskForm />

        <MakerTaskListQuery query={MAKER_TASK_LIST}>
          {({ loading, error, data }) => {
            if (data) {
              return <div>{JSON.stringify(data)}</div>;
            }
            return null;
          }}
        </MakerTaskListQuery>
      </>
    );
  }
}
