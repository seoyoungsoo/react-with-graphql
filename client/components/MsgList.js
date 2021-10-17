import React, { useState } from 'react';
import MsgInput from './MsgInput';
import MsgItem from './MsgItem';

const UserIds = ['roy', 'jay'];
const getRandomUserId = () => UserIds[Math.round(Math.random())];

const originalMsgs = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: i + 1,
    userId: getRandomUserId(),
    timestamp: 1234567890123 + i * 1000 * 60,
    text: `${i + 1} mock text`,
  }))
  .reverse();

const MsgList = () => {
  const [msgs, setMsgs] = useState(originalMsgs);

  const onCreate = (text) => {
    const newMsg = {
      id: msgs.length + 1,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: `${msgs.length + 1} ${text}`,
    };
    setMsgs((msgs) => [newMsg, ...msgs]);
  };

  return (
    <>
      <MsgInput mutate={onCreate} />
      <ul className='messages'>
        {msgs.map((v) => (
          <MsgItem key={v.id} {...v} />
        ))}
      </ul>
    </>
  );
};

export default MsgList;
