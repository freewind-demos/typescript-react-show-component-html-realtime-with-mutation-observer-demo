import React, {FC, useRef, useState, useEffect, useMemo} from 'react';
import {MyComponent} from './MyComponent';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const [html, setHtml] = useState<string>()
  const observer = useMemo(() => new MutationObserver(() => {
    setHtml(ref.current?.outerHTML ?? '');
  }), []);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current, {
        attributes: true,
        subtree: true
      });
    } else {
      observer.disconnect()
    }
  }, [ref.current])

  return <div>
    <MyComponent ref={ref} defaultValue={'react'}/>
    <hr/>
    {html}
  </div>;
}
