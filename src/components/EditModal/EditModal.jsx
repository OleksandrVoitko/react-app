import { useSelector } from 'react-redux';
import editingSelector from '../../redux/editing/editingSelector';
import cl from './EditModal.module.css';

const EditModal = () => {
  const isEditing = useSelector(editingSelector.getIsEditing);
  const rootClasses = [cl.editModal];

  if (isEditing) {
    rootClasses.push(cl.active);
  }
  return <div className={rootClasses.join(' ')}></div>;
};

export default EditModal;
