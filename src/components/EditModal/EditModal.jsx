import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import editingSelector from '../../redux/editing/editingSelector';
import { closeModal } from '../../redux/editing/editingSlice';
import cl from './EditModal.module.css';

const EditModal = ({ children }) => {
  const dispatch = useDispatch();
  const isEditing = useSelector(editingSelector.getIsEditing);
  const rootClasses = [cl.editModal];

  if (isEditing) {
    rootClasses.push(cl.active);
  }

  const closeEditnigModal = () => {
    dispatch(closeModal());
  };

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        closeEditnigModal();
      }}
    >
      <div className={cl.editModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default EditModal;
