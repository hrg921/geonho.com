import gql from 'graphql-tag';

export const MakerTaskDetailFragment = gql`
  fragment MakerTaskDetail on MakerTask {
    _id
    comment
    title
  }
`;
