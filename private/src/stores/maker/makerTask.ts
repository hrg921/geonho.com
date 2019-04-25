import { action, observable } from 'mobx';
import { client } from '../apollo';
import {
  MakerTaskDetail,
  MakerTaskList,
  MakerTaskInput,
  DeleteMakerTask,
  DeleteMakerTaskVariables,
  AddMakerTask,
  AddMakerTaskVariables,
} from '../../graphqls/schema';
import { MAKER_TASK_LIST } from '../../graphqls/Maker/queries';
import {
  DELETE_MAKER_TASK,
  ADD_MAKER_TASK,
} from '../../graphqls/Maker/mutations';
export default class MakerTaskStore {
  @observable public makerTasks: MakerTaskDetail[];

  constructor() {
    this.makerTasks = [];
  }

  @action
  async initMakerTasks() {
    const result = await client.query<MakerTaskList>({
      query: MAKER_TASK_LIST,
    });

    this.makerTasks = result.data.makerTasksByFilter;
  }

  @action
  async addMakerTask(makerTask: MakerTaskInput) {
    try {
      const result = await client.mutate<AddMakerTask, AddMakerTaskVariables>({
        mutation: ADD_MAKER_TASK,
        variables: {
          makerTask: makerTask,
        },
      });

      this.makerTasks = [...this.makerTasks, result.data.addMakerTask];
    } catch (error) {
      alert(error);
    }
  }

  @action
  async updateMakerTask() {}

  @action
  deleteMakerTask = async (_id: string) => {
    try {
      const result = await client.mutate<
        DeleteMakerTask,
        DeleteMakerTaskVariables
      >({
        mutation: DELETE_MAKER_TASK,
        variables: {
          makerTaskId: _id,
        },
      });

      this.makerTasks = this.makerTasks.filter(
        makerTask => makerTask._id !== _id
      );
    } catch (error) {
      alert(error);
    }
  };
}
