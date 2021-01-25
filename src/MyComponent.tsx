import React, {useState} from 'react';

type Props = {
  defaultValue: string;
}

export const MyComponent = React.forwardRef<HTMLDivElement, Props>(({defaultValue}, ref) => {
  const [value, setValue] = useState(defaultValue);
  return <div ref={ref}>
    <span>Hello</span>
    <input type={'text'} value={value} onChange={event => setValue(event.target.value)}/>
  </div>;
});
