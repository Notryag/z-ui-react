import styles from './index.less';
import Button from '@/components/Button';
import Progress from '@/components/Progress';
import Tag from '@/components/Tag';
import Empty from '@/components/Empty';
import Icon from '@/components/Icon';
import Drawer from '@/components/Drawer';


import { useState } from 'react';
export default function IndexPage() {
  const [percent, setPrecent] = useState(10);

  return (
    <div>
      <div>
        <Button>default</Button>
        <Button className={styles.btn} type="warning">
          warning
        </Button>
        <Button className={styles.btn} type="primary">
          primary
        </Button>
        <Button className={styles.btn} type="info">
          info
        </Button>
        <Button className={styles.btn} type="pure">
          pure
        </Button>
        <Button className={styles.btn} type="primary" shape="circle">
          circle
        </Button>
        <Button className={styles.mb16} type="primary" block>
          primary&block
        </Button>
        <Button
          type="warning"
          shape="circle"
          block
          onClick={() => {
            alert('block');
          }}
        >
          circle&block
        </Button>
      </div>

      <div>
        <Progress percent={percent} width={240} autoHidden />

        <Progress
          percent={100}
          themeColor="#6699FF"
          statusScope={[
            [18, 'red'],
            [40, 'orange'],
          ]}
        />
      </div>
      <div>
        <Tag color="#06c">标签</Tag>
        <Tag color="red">标签</Tag>
        <Tag color="orange">标签</Tag>
        <Tag>标签</Tag>
        <br />
        <Tag color="green" closable>
          标签
        </Tag>
        <Tag closable>标签</Tag>
      </div>
      <div>
        <Empty />
      </div>
      <div>
        <Icon name='edit' />
        <Icon name='edit' />
        <Icon name='edit' />
        <Icon name='edit' />
      </div>
      <div>
      <Drawer visible={true} />
      </div>
    </div>
  );
}
