import { Children, useEffect, useState } from '@umijs/renderer-react/node_modules/@types/react';
import React from 'react';
import './index.less';

export default function Drawer(props) {
  let {zIndex, onClose,
    children,
    width='300px',
    placement="right",
    drawerStyle,
    destroyOnClose
  } = props

  let [visible, setVisible] = useState(props.visible)
  let [isDesChild, setIsDesChild] = useState(false)


  const handleClose =() => {
    onClose && onClose()
    setVisible((prev) => {
      return false
    })
    if(destroyOnClose) {
      setIsDesChild(true)
    }
  }
  useEffect(() => {
    // setVisible
  })

  return (
    <div className='z-drawer-wrap'
      style={{zIndex,width:'100%'}}
    >
      <div className="z-drawer-mask"></div>
      <div className="z-drawer-content" style={{
        width,
        [placement]:visible ? 0 : '-100%',
        ...drawerStyle
      }}>
        {
          isDesChild ? null : children
        }
        <div className="x-btn-close" onClick={handleClose}>X</div>
      </div>
      page

    </div>
  );
}
