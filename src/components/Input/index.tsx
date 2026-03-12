import classNames from 'classnames';
import React, { ChangeEventHandler, CSSProperties, ReactNode, useEffect, useRef } from 'react';
import Icon from '../Icon';
import './index.less';

interface InputProps {
  icon?: ReactNode;
  defaultValue?: string;
  id?: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  style?: CSSProperties;
  autoFocus?: boolean;
  placeholder?: string;
  onIconClick?: (value: string) => void;
}

export default function Input(props: InputProps) {
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
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e.target.value)
  }
  const handleIconClick = () => {
    onIconClick && onIconClick(inputRef.current?.value ?? '')
  }

  return (
    <div className={classNames('z-input')}>
      <input
        id={id}
        ref={inputRef}
        className={classNames('z-input-inner',className)}
        type={type}
        style={style}
        value={value ?? defaultValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {!!icon && <span className="z-input-icon" onClick={handleIconClick}>{ icon }</span>}
    </div>
  );
}
