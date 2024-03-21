import { Popconfirm } from 'antd';
import styles from './Confirmation.styled';

const Confirmation = ({ title, cancel, confirm, children }) => {
  return (
    <Popconfirm
      title={title}
      cancelText="No"
      okText="Yes"
      onCancel={cancel}
      onConfirm={confirm}
      okButtonProps={{
        type: 'default',
      }}
      cancelButtonProps={{
        className: `${styles.customButton}`,
        type: 'primary',
      }}
    >
      {children}
    </Popconfirm>
  );
};

export default Confirmation;
