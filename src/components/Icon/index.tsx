import { CSSProperties } from '@umijs/renderer-react/node_modules/@types/react';
import classNames from 'classnames';
import React from 'react';
import './index.less';
interface IconProps {
  name:string,
  size?:string,
  style?: CSSProperties
}

export default function Icon(props:IconProps) {
  let { name, size, style } = props;
  return (
    <span>
      <i
        className={classNames('z-icon', 'material-icons', size)}
        style={style}
      >
        {name}
      </i>
    </span>
  );
}
