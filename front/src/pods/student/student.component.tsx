import React from 'react';
import * as classes from './student.styles';
// Material UI ~ components
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';

interface Props {
  room: string;
  log: string;
}

export const StudentComponent: React.FC<Props> = props => {
  const { room, log } = props;
  const {
    mainContainer,
    title,
    sessionName,
    studentBoard,
    labelTextarea,
  } = classes;

  return (
    <>
      <header>
        <Typography className={title} variant="h1">
          Student page
        </Typography>
      </header>
      <main className={mainContainer}>
        <Typography className={sessionName} variant="body1">
          Session name: {room}
        </Typography>
        <label className={labelTextarea} htmlFor="session">
          Content
        </label>
        <TextareaAutosize
          id="session"
          rowsMax={40}
          rowsMin={40}
          className={studentBoard}
          value={log}
        />
      </main>
    </>
  );
};
