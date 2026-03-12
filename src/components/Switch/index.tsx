import classnames from 'classnames'
import './index.less'

/**
 * switch
 * @param {onClick} func 对外暴露的点击事件
 * @param {checked} bool 是否被选中
 * @param {disabled} bool 是否被禁用
 * @param {onText} string 开启状态的文本
 * @param {offText} string 关闭状态的文本
 * @param {onChange} func 状态切换时的文本
 * @param {size} string 组件的尺寸
 */
interface SwitchProps {
  color?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  onText?: string;
  offText?: string;
  onChange?: (checked: boolean) => void;
  size?: 'small' | 'large';
}

export default function Switch(props: SwitchProps) {
  const { color = '#09f', className, checked, disabled, onText, offText, onChange, size } = props
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };
  return <div className={classnames('z-switch', className)}>
    <label className={classnames('z-switch-inner', size)} style={{pointerEvents: disabled ? 'none' : 'auto', cursor: disabled ? 'not-allowed' : 'pointer'}}>
      <input type='checkbox' checked={checked} onChange={handleChange} />
      <span
        className="z-switch-animating"
        style={{ backgroundColor: color }} data-onText={onText}>
      </span>
      <span className="offText">{ offText }</span>
    </label>
  </div>
}
