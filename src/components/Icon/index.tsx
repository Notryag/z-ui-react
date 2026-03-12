import { CSSProperties, MouseEventHandler } from 'react';
import classNames from 'classnames';
import React from 'react';
import './index.less';
interface IconProps {
  name: string;
  size?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLElement>;
}

export default function Icon(props:IconProps) {
  const { name, size, style, onClick } = props;

  const handleClick: MouseEventHandler<HTMLElement> = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <span>
      <i
        className={classNames('z-icon', 'material-icons', size)}
        style={style}
        onClick={handleClick}
      >
        {name}
      </i>
    </span>
  );
}
