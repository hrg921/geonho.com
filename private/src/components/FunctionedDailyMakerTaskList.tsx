import React from 'react';
import { MutationFn } from 'react-apollo';
import {
  DeleteMakerTaskMutation,
  DELETE_MAKER_TASK,
} from '../graphqls/Maker/mutations';
import { MakerTaskListQuery, MAKER_TASK_LIST } from '../graphqls/Maker/queries';
import DailyMakerTaskList from './daily-maker/DailyMakerTaskList';
import { DeleteMakerTask, DeleteMakerTaskVariables } from '../graphqls/schema';

export default class FunctionedDailyMakerTaskList extends React.PureComponent {
  public render() {
    return (
      <MakerTaskListQuery query={MAKER_TASK_LIST}>
        {({ loading, error, data }) => {
          if (loading || error) {
            return null;
          }
          if (data) {
            return (
              <DeleteMakerTaskMutation mutation={DELETE_MAKER_TASK}>
                {mutate => (
                  <DailyMakerTaskList
                    makerTasks={data.makerTasksByFilter}
                    onDeleteButtonClicked={this.deleteMakerTask(mutate)}
                  />
                )}
              </DeleteMakerTaskMutation>
            );
          }
        }}
      </MakerTaskListQuery>
    );
  }

  private deleteMakerTask(
    mutate: MutationFn<DeleteMakerTask, DeleteMakerTaskVariables>
  ) {
    return (_id: string) =>
      mutate({
        variables: {
          makerTaskId: _id,
        },
      });
  }
}
