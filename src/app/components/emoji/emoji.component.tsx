import React from 'react';
import * as emoji from 'node-emoji';

const Emoji = (props: { label: string; symbol: string }) => {
  return (
    <span
      className='emoji'
      role='img'
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? 'false' : 'true'}
    >
      {emoji.find(props.symbol)?.emoji}
    </span>
  );
};

export default Emoji;
