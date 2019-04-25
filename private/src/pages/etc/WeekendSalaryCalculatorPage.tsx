import dayjs from 'dayjs';
import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class WeekendSalaryCalculatorPage extends React.PureComponent {
  @observable private from: string = '';
  @observable private money: number = 0;

  constructor(props: any) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }

  public render() {
    return (
      <div>
        <input value={this.from} onChange={this.onInputChange} />
        <button onClick={this.onButtonClicked}>계산 시작</button>
        <h1>{this.money} 원</h1>
      </div>
    );
  }

  public onInputChange(event: React.FormEvent<HTMLInputElement>) {
    this.from = event.currentTarget.value;
  }

  public onButtonClicked() {}

  public componentDidMount() {
    // const interval = setInterval();
  }

  public componentWillUnMount() {}
}
