import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { MakerTaskDetailFragment } from './fragments';
import {
  AddMakerTask,
  AddMakerTaskVariables,
  DeleteMakerTask,
  DeleteMakerTaskVariables,
} from '../schema';

export const ADD_MAKER_TASK = gql`
  ${MakerTaskDetailFragment}
  mutation AddMakerTask($makerTask: MakerTaskInput!) {
    addMakerTask(makerTask: $makerTask) {
      ...MakerTaskDetail
    }
  }
`;

export const DELETE_MAKER_TASK = gql`
  ${MakerTaskDetailFragment}
  mutation DeleteMakerTask($makerTaskId: ObjectId!) {
    deleteMakerTask(makerTaskId: $makerTaskId) {
      ...MakerTaskDetail
    }
  }
`;

export class AddMakerTaskMutation extends Mutation<
  AddMakerTask,
  AddMakerTaskVariables
> {}

export class DeleteMakerTaskMutation extends Mutation<
  DeleteMakerTask,
  DeleteMakerTaskVariables
> {}
