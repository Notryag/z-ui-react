import styles from './index.less';
import Button from '@/components/Button';
import Progress from '@/components/Progress';
import Tag from '@/components/Tag';
import Empty from '@/components/Empty';
import Icon from '@/components/Icon';
import Drawer from '@/components/Drawer';
import Input from '@/components/Input';
import Alert from '@/components/Alert';
import Badge from '@/components/Badge';
import Switch from '@/components/Switch';


import { useState } from 'react';
export default function IndexPage() {
  const [percent, setPrecent] = useState(10);
  const [visible, setVisible] = useState(false);
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
        {/* <Empty /> */}
      </div>
      <div>
        <Icon name="edit" />
        <Icon name="edit" />
        <Icon name="edit" />
        <Icon name="edit" />
      </div>
      <div>

        <Drawer visible={visible} onClose={() => setVisible(false)}/>
        <Button onClick={() => setVisible(true)}>打开抽屉{JSON.stringify(visible)}</Button>
      </div>
      <div>
        <Input></Input>
        <Input autoFocus></Input>
        <Input icon={<Icon name="edit" />} onIconClick={(v) => {alert(`输入的是: ${v}`)}} />
      </div>
      <div>
        <Alert message="出票成功：您的小票已出，快来火车站获取吧～" type="success" />
        <Alert message="出票错误：react错误，返回首页～" type="error" />
        <Alert message="出票通知：您的小票已出，快来火车站获取吧～～" type="info" />
        <Alert message="温馨提示：您的小票已出，快来火车站获取吧～" closeable/>
      </div>
      <div>
        <Badge  dot>Node</Badge> <br />
        <Badge count={129} overflowCount={99}>react+vue</Badge><span style={{marginLeft:"60px"}}></span>
        <Badge count={129} overflowCount={99} style={{backgroundColor: 'green'}}>Node</Badge> <br />
        <br />
        <Badge status="success" text="成功"></Badge>
        <br />
        <Badge status="error" text="错误"></Badge>
        <br />
        <Badge status="processing" text="进行中"></Badge>
        <br />
        <Badge status="warning" text="警告"></Badge>
      </div>
      <div>
        <Switch size="small" /> <br /><br />
        <Switch /> <br /><br />
        <Switch size="large" />
      </div>
    </div>
  );
}
