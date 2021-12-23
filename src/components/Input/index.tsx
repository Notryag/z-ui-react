import classNames from 'classnames';
import React, { useRef, useEffect } from 'react';
import Icon from '../Icon';
import './index.less';

export default function Input(props) {
  const {
    icon,
    defaultValue,
    id,
    className,
    type = 'text',
    value,
    onChange,
    style,
    autoFocus,
    placeholder = '请输入内容',
    onIconClick,
  } = props;
  const inputRef = useRef(null);
  useEffect(() => {
    autoFocus && inputRef.current.focus()
  })
  const handleChange = (e) => {
    onChange && onChange(e.target.value)
  }
  const handleIconClick = () => {
    onIconClick && onIconClick(inputRef.current.value)
  }

  return (
    <div className={classNames('z-input')}>
      <input
        id={id}
        ref={inputRef}
        className={classNames('z-input-inner',className)}
        type={type}
        style={style}
        value={value || typeof value === 'undefined' ? defaultValue : ''}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {!!icon && <span className="z-input-icon" onClick={handleIconClick}>{ icon }</span>}
    </div>
  );
}
