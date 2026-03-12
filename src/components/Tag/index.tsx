import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import './index.less';

interface TagProps {
  color?: string;
  closable?: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

export default function Tag(props: TagProps) {
  const { children, color, closable, onClose } = props;
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className={classNames('zTag', color ? 'zTagHasColor' : '')}
      style={{ backgroundColor: color }}
    >
      {children}
      {closable ? (
        <span className="closeBtn" onClick={handleClose}>x</span>
      ) : null}
    </div>
  );
}
