import React from 'react';

export default function Button({ title, ...props }) {
  return <button {...props}>{title}</button>;
}
