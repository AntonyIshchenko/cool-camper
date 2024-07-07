import { useDispatch, useSelector } from 'react-redux';

import CardList from '../../components/CardList/CardList';
import CardItem from '../../components/CardItem/CardItem';
import CardModal from '../../components/CardModal/CardModal';
import { deleteFavorites } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import { selectSelected } from '../../redux/catalog/selectors';
import { setSelected } from '../../redux/catalog/slice';
import css from './Favorites.module.css';

export default function Favorites() {
  const items = useSelector(selectFavorites);
  const selectedItem = useSelector(selectSelected);
  const dispatch = useDispatch();

  const isModalOpen = selectedItem !== null;

  const handleModal = id => {
    dispatch(setSelected(id));
  };

  const handleRemoveFavorites = id => {
    dispatch(deleteFavorites(id));
  };

  return (
    <>
      <section>
        <div className="container">
          <h2>Favorites</h2>
          <CardList className={css.list}>
            {items.map(item => (
              <CardItem
                key={item._id}
                item={item}
                isFavorite={true}
                onClickFavorites={handleRemoveFavorites}
                onClickShowMore={handleModal}
              />
            ))}
          </CardList>
        </div>
      </section>
      <CardModal
        isOpen={isModalOpen}
        item={items.find(elem => elem._id === selectedItem)}
        onChange={handleModal}
      />
    </>
  );
}
