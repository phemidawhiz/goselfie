
export interface ITask {
    taskid: string;
    description: string;
    datetime: string;
    title: string;
    filename: string;
}

export interface ITaskPage {
  page: ITask[];
  id: number;
}

export interface ITaskSekfies {
  filename: string;
  username: string;
  datetime: string;
}

export interface IProfileInfo {
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  activated: string;
  datetime: string;
  votecount: string;
  screened: string;
  mop: string;
  username: string;
  gender: string;
  about: string;
  age: string;
  profileimage: string;
  twitter: string;
  instagram: string;
  facebook: string;
}

export interface ISelfie {
  filename: string;
  datetime: string;
  taskid: string;
  taskdesc: string;
  tasktitle: string;
}
