import MakerTaskStore from './maker/makerTask';

export const store = {
  makerTask: new MakerTaskStore(),
};

export type RootMobxStore = typeof store;
