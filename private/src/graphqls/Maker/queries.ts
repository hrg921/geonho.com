import gql from 'graphql-tag';
import { MakerTaskList } from '../schema';
import { Query } from 'react-apollo';

import { MakerTaskDetailFragment } from './fragments';

export const MAKER_TASK_LIST = gql`
    ${MakerTaskDetailFragment}
    query MakerTaskList {
        makerTasksByFilter {
            ...MakerTaskDetail
        }
    }
`;

export class MakerTaskListQuery extends Query<MakerTaskList> {}
