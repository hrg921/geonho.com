/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddMakerTask
// ====================================================

export interface AddMakerTask_addMakerTask {
  _id: any;
  comment: string | null;
  title: string;
}

export interface AddMakerTask {
  addMakerTask: AddMakerTask_addMakerTask;
}

export interface AddMakerTaskVariables {
  makerTask: MakerTaskInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteMakerTask
// ====================================================

export interface DeleteMakerTask_deleteMakerTask {
  _id: any;
  comment: string | null;
  title: string;
}

export interface DeleteMakerTask {
  deleteMakerTask: DeleteMakerTask_deleteMakerTask | null;
}

export interface DeleteMakerTaskVariables {
  makerTaskId: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MakerTaskList
// ====================================================

export interface MakerTaskList_makerTasksByFilter {
  _id: any;
  comment: string | null;
  title: string;
}

export interface MakerTaskList {
  makerTasksByFilter: MakerTaskList_makerTasksByFilter[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MakerTaskDetail
// ====================================================

export interface MakerTaskDetail {
  _id: any;
  comment: string | null;
  title: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface MakerTaskInput {
  title: string;
  comment?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
