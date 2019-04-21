import React from 'react';
import { MutationFn } from 'react-apollo';
import { Form, Formik } from 'formik';
import { AddMakerTask, AddMakerTaskVariables } from '../../graphqls/schema';
import {
  AddMakerTaskMutation,
  ADD_MAKER_TASK,
} from '../../graphqls/Maker/mutations';

interface FormValues {
  title: string;
}

export default class DailyMakerTaskForm extends React.PureComponent {
  public render() {
    return (
      <AddMakerTaskMutation mutation={ADD_MAKER_TASK}>
        {(mutate, { data, loading }) => {
          return (
            <Formik
              initialValues={{
                title: '',
              }}
              onSubmit={this.mutateMakerTask(mutate)}
              render={({}) => (
                <Form>
                  <input type="string" name="title" />
                  <button type="submit">submit</button>
                </Form>
              )}
            />
          );
        }}
      </AddMakerTaskMutation>
    );
  }

  private mutateMakerTask = (
    mutate: MutationFn<AddMakerTask, AddMakerTaskVariables>
  ) => async (values: FormValues) => {
    await mutate({ variables: { makerTask: values } });
  };
}
