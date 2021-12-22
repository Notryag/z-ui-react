import './index.less'
import classnames from 'classnames';

interface BaseButtonProps{
  children?:React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLElement>,
  className? :string,
  type? : string,
  shape?: string,
  block?: boolean
}

export default function Button(props:BaseButtonProps) {
  let { children, onClick, className, type, shape, block} = props
  return (
    <div className={classnames('ZButton', 'ripple', type, shape, block ? 'block' : '', className)} onClick={onClick}>
      {children}
    </div>
  );
}
