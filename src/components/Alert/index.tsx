import classNames from 'classnames';
import React ,{useState}from 'react';
import './index.less';

export default function Alert(props) {
  const {
    style,
    closeable,
    closeText,
    message,
    description,
    type='warning',
    onClose
  } = props
  let [visible, setVisible] = useState(true)
  const handleClick = () => {
    setVisible(false)
    onClose && onClose()
  }
  return (visible ?
    <div
    style={style}
    className={classNames('z-alert', type)}>
      <div className={'z-alert-title'}>{message}</div>
      <div className={'z-alert-content'}>{description}</div>
      { !!closeable && <span  className='z-btn-close' onClick={handleClick}> { closeText ? closeText : 'x'}</span>}

    </div>
    : null
  );
}
