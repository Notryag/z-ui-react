import classNames from 'classnames';
import React, { useRef } from 'react';
import './index.less';

interface TagProps {
  color?: string;
  closable?: boolean;
  children?: React.ReactNode;
  onClose?: any
}

export default function Tag(props: TagProps) {
  let { children, color, closable, onClose } = props;
  let tag = useRef(null);
  const handleClose = () => {
    onClose && onClose();
    tag.current.style.display = 'none';
  };

  return (
    <div
      className={classNames('zTag', color ? 'zTagHasColor' : '')}
      style={{ backgroundColor: color }}
      ref={tag}
    >
      {children}
      {closable ? (
        <span className="closeBtn" onClick={handleClose}>x</span>
      ) : null}
    </div>
  );
}
