import { Button, TextField } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { MutationFn } from 'react-apollo';
import { Form, Formik, FormikActions } from 'formik';
import { AddMakerTask, AddMakerTaskVariables } from '../../graphqls/schema';
import {
  AddMakerTaskMutation,
  ADD_MAKER_TASK,
} from '../../graphqls/Maker/mutations';
import { RootMobxStore } from '../../stores/mobx';
import MakerTaskStore from '../../stores/maker/makerTask';

interface InjectedProps {
  makerTaskStore: MakerTaskStore;
}

interface FormValues {
  title: string;
}

@inject((stores: RootMobxStore) => ({
  makerTaskStore: stores.makerTask as MakerTaskStore,
}))
@observer
export default class DailyMakerTaskForm extends React.PureComponent {
  get injected() {
    return this.props as InjectedProps;
  }

  public render() {
    return (
      <Formik
        initialValues={{
          title: '',
        }}
        onSubmit={this.mutateMakerTask}
        render={props => (
          <Form>
            <TextField
              type="text"
              name="title"
              onChange={props.handleChange}
              value={props.values.title}
              fullWidth
              variant="outlined"
            />
            <Button variant="contained" type="submit">
              submit
            </Button>
          </Form>
        )}
      />
    );
  }

  private mutateMakerTask = (
    values: FormValues,
    actions: FormikActions<FormValues>
  ) => {
    this.injected.makerTaskStore.addMakerTask(values);
    actions.resetForm();
  };
}
