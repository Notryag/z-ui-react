import { CSSProperties, ReactNode } from 'react';
import './index.less';
import ReactDOM from 'react-dom';

interface DrawerProps {
  visible?: boolean;
  zIndex?: number;
  onClose?: () => void;
  children?: ReactNode;
  width?: string | number;
  placement?: 'left' | 'right';
  drawerStyle?: CSSProperties;
  destroyOnClose?: boolean;
  closeable?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
}

function Drawer(props: DrawerProps) {
  const {
    zIndex = 10,
    onClose,
    children,
    width = '300px',
    placement = 'right',
    drawerStyle,
    destroyOnClose,
    closeable = true,
    mask = true,
    visible = false,
    maskClosable,
  } = props;

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const childDom = (
    <div
      className="z-drawer-wrap"
      style={{
        zIndex,
        width: visible ? '100%' : '0',
      }}
    >
      {!!mask && (
        <div
          className="z-drawer-mask"
          onClick={maskClosable ? handleClose : undefined}
        ></div>
      )}
      <div
        className="z-drawer-content"
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          [placement]: visible ? 0 : '-100%',
          ...drawerStyle,
        }}
      >
        {visible || !destroyOnClose ? children : null}
        {!!closeable && (
          <span className="z-btn-close" onClick={handleClose}>
            X
          </span>
        )}
      </div>
    </div>
  );
  return ReactDOM.createPortal(childDom, document.body);
}
export default Drawer;
