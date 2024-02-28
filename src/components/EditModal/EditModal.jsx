import cl from './EditModal.module.css';

const EditModal = () => {
  const rootClasses = [cl.editModal];

  //   if (true) {
  //     rootClasses.push(cl.active);
  //   }
  return <div className={rootClasses.join(' ')}></div>;
};

export default EditModal;
