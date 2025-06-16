import React from 'react';
import { Button, message } from 'antd';

export type MessageProps = {
  onClick?: () => void;
};

const Message: React.FC<MessageProps> = ({ onClick }) => {
  const handleClick = () => {
    message.success('This is a success message');
    if (onClick) onClick();
  };

  return <Button onClick={handleClick}>Show Message</Button>;
};

export default Message;
