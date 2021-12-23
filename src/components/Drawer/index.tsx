import React, { useEffect, useState } from 'react';
import './index.less';
import ReactDOM from 'react-dom'
function Drawer(props) {
  let {
    zIndex = 10,
    onClose,
    children,
    width = '300px',
    placement = 'right',
    drawerStyle,
    destroyOnClose,
    closeable = true,
    mask = true,
    maskClosable,
  } = props;

  let [visible, setVisible] = useState(props.visible);
  let [isDesChild, setIsDesChild] = useState(false);

  const handleClose = () => {
    onClose && onClose();
    setVisible((prev) => {
      return false;
    });
    if (destroyOnClose) {
      setIsDesChild(true);
    }
  };
  useEffect(() => {

    setVisible(() => {
      return props.visible;
    });
  }, [props.visible]);

  const childDom =  (
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
          onClick={maskClosable ? handleClose : null}
        ></div>
      )}
      <div
        className="z-drawer-content"
        style={{
          width,
          [placement]: visible ? 0 : '-100%',
          ...drawerStyle,
        }}
      >
        {isDesChild ? null : children}
        {!!closeable && (
          <span className="z-btn-close" onClick={handleClose}>
            X
          </span>
        )}
      </div>
    </div>
  )
 return ReactDOM.createPortal(childDom, document.body)
}
export default Drawer