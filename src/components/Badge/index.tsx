import classNames from 'classnames';
import React from 'react';
import './index.less';
const colorArr = {
  success: '#52c41a',
  warning: '#faad14',
  error: '#f5222d',
  default: '#d9d9d9',
  processing: '#1890ff',
};

type BadgeStatus = keyof typeof colorArr;

interface BadgeProps {
  color?: string;
  count?: number;
  dot?: boolean;
  offset?: [number, number];
  overflowCount?: number;
  showZero?: boolean;
  status?: BadgeStatus;
  text?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function Badge(props: BadgeProps) {
  const {
    color,
    count = 0,
    dot,
    offset,
    overflowCount,
    showZero,
    status,
    text,
    style,
    children,
  } = props;
  const displayCount =
    typeof overflowCount === 'number' && count > overflowCount
      ? `${overflowCount}+`
      : count;
  return (
    <div className="z-badge">
      {status ? (
        <div className="z-badge-status-dot">
          <span
            className={'dot'}
            style={{
              backgroundColor: color || colorArr[status] || colorArr.default,
            }}
          >

          </span>
          {text}
        </div>
      ) : (
        <div>
          <span className={classNames('z-badge-inner', dot ? 'z-badge-dot' : '')}
            style={{
              right: offset ? offset[0] + 'px' : '',
              top: offset ? offset[1] + 'px' : '',
              display: !showZero && !count ? 'none' : 'inline-block',
              ...style
            }}
          >{dot ? '' : displayCount}</span>
          {children}
        </div>
      )}
    </div>
  );
}
