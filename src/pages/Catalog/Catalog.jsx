import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Catalog.module.css';
import FilterForm from '../../components/FilterForm/FilterForm';
import CardList from '../../components/CardList/CardList';
import CardItem from '../../components/CardItem/CardItem';
import CardModal from '../../components/CardModal/CardModal';
import Button from '../../components/Button/Button';

import {
  // selectIsLoading,
  selectIsLastPage,
  selectItems,
  selectSelected,
} from '../../redux/catalog/selectors';
import { fetchCatalog } from '../../redux/catalog/operations';
import { addFavorites, deleteFavorites } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import { setSelected } from '../../redux/catalog/slice';

export default function Catalog() {
  // const isLoading = useSelector(selectIsLoading);
  const items = useSelector(selectItems);
  const favorites = useSelector(selectFavorites);
  const selectedItem = useSelector(selectSelected);
  const isLastPage = useSelector(selectIsLastPage);
  const dispatch = useDispatch();

  const favoritesId = useMemo(
    () => favorites.map(elem => elem._id),
    [favorites]
  );

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  const isModalOpen = selectedItem !== null;

  const handleModal = id => {
    dispatch(setSelected(id));
  };

  const handleClick = () => {
    console.log('Load More click');
    dispatch(fetchCatalog());
  };

  const handleAddRemoveFavorites = id => {
    dispatch(
      favoritesId.includes(id)
        ? deleteFavorites(id)
        : addFavorites(items.find(elem => elem._id === id))
    );
  };

  return (
    <>
      <section>
        <div className="container">
          <h2>Catalog</h2>
          <div className={css.container}>
            <FilterForm />
            <div>
              <CardList className={css.list}>
                {items.map(item => (
                  <CardItem
                    key={item._id}
                    item={item}
                    isFavorite={favoritesId.includes(item._id)}
                    onClickFavorites={handleAddRemoveFavorites}
                    onClickShowMore={handleModal}
                  />
                ))}
              </CardList>

              {!isLastPage && (
                <Button
                  className={css.button}
                  type="button"
                  onClick={handleClick}
                >
                  Load more
                </Button>
              )}
            </div>
          </div>
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
