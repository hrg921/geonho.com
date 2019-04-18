import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { MakerTaskDetailFragment } from './fragments';
import { AddMakerTask, AddMakerTaskVariables } from '../schema';

export const ADD_MAKER_TASK = gql`
  ${MakerTaskDetailFragment}
  mutation AddMakerTask($makerTask: MakerTaskInput!) {
    addMakerTask(makerTask: $makerTask) {
      ...MakerTaskDetail
    }
  }
`;

export class AddMakerTaskMutation extends Mutation<AddMakerTask, AddMakerTaskVariables> {}
