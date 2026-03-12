import classNames from 'classnames';
import React, { CSSProperties, useState } from 'react';
import './index.less';

interface AlertProps {
  style?: CSSProperties;
  closeable?: boolean;
  closeText?: React.ReactNode;
  message?: React.ReactNode;
  description?: React.ReactNode;
  type?: 'success' | 'info' | 'error' | 'warning';
  onClose?: () => void;
}

export default function Alert(props: AlertProps) {
  const {
    style,
    closeable,
    closeText,
    message,
    description,
    type='warning',
    onClose,
  } = props;
  const [visible, setVisible] = useState(true);
  const handleClick = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };
  return visible ? (
    <div
      style={style}
      className={classNames('z-alert', type)}
    >
      <div className={'z-alert-title'}>{message}</div>
      <div className={'z-alert-content'}>{description}</div>
      {!!closeable && (
        <span className="z-btn-close" onClick={handleClick}>
          {closeText ? closeText : 'x'}
        </span>
      )}
    </div>
  ) : null;
}
