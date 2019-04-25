import React from 'react';
import { MutationFn } from 'react-apollo';
import {
  DeleteMakerTaskMutation,
  DELETE_MAKER_TASK,
} from '../graphqls/Maker/mutations';
import { MakerTaskListQuery, MAKER_TASK_LIST } from '../graphqls/Maker/queries';
import DailyMakerTaskForm from './daily-maker/DailyMakerTaskForm';
import DailyMakerTaskList from './daily-maker/DailyMakerTaskList';
import { DeleteMakerTask, DeleteMakerTaskVariables } from '../graphqls/schema';
import MakerTaskStore from '../stores/maker/makerTask';
import { inject, observer } from 'mobx-react';
import { RootMobxStore } from '../stores/mobx';

interface InjectedProps {
  makerTaskStore: MakerTaskStore;
}

@inject((stores: RootMobxStore) => ({
  makerTaskStore: stores.makerTask as MakerTaskStore,
}))
@observer
export default class FunctionedDailyMakerTaskList extends React.PureComponent {
  get injected() {
    return this.props as InjectedProps;
  }

  public render() {
    const { makerTaskStore } = this.injected;
    const { makerTasks, deleteMakerTask } = makerTaskStore;

    return (
      <DailyMakerTaskList
        makerTasks={makerTasks}
        onDeleteButtonClicked={deleteMakerTask}
      />
    );
  }

  public componentDidMount() {
    this.injected.makerTaskStore.initMakerTasks();
  }
}
