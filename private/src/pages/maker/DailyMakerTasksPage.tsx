import React from 'react';

import { MakerTaskListQuery, MAKER_TASK_LIST } from '../../graphqls/Maker/queries';

export default class DailyMakerTasksPage extends React.PureComponent {
    public render() {
        return (
            <MakerTaskListQuery
                query={MAKER_TASK_LIST}
              >
                {({ loading, error, data }) => {
                  if (data) {
                    return <div>
                      {JSON.stringify(data)}
                    </div>;
                  }
                  return null;
                }}
            </MakerTaskListQuery>
        )
    }
} 