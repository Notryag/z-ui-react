import classNames from 'classnames';
import React from 'react';
import Icon from '../Icon';
import './index.less';

interface EmptyProps {
  text?:string,
  className?: string,
}

export default function Page(props:EmptyProps) {
  let {text, className} = props
  return (
    <div className={classNames('emptyWrap',className)}>
      <div className='emptyInner'>
        <Icon name='filter_none' size='l' style={{fontSize:'50px'}}/>
      </div>
      <p>{text ? text: '空空如也'}</p>
    </div>
  );
}
