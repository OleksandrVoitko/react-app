import { Popconfirm } from 'antd';

const Confirmation = ({ title, cancel, confirm, children }) => {
  return (
    <Popconfirm
      title={title}
      cancelText="No"
      okText="Yes"
      onCancel={cancel}
      onConfirm={confirm}
      // okButtonProps={{
      //   className: `${styles.emotoin}`,
      //   type: 'default',
      // }}
    >
      {children}
    </Popconfirm>
  );
};

export default Confirmation;
