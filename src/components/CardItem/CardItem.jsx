import FeatureList from '../FeatureList/FeatureList';
import Button from '../Button/Button';
import sprite from '../../assets/sprite.svg';

import css from './CardItem.module.css';

export default function CardItem({
  item = {},
  isFavorite,
  onClickFavorites,
  onClickShowMore,
}) {
  const imageSrc = item.gallery.length === 0 ? '' : item.gallery[0];

  const price = item.price
    ? `€${item.price
        .toLocaleString('de-DE', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })
        .replaceAll('.', '')}`
    : '';

  let description = item.description.slice(0, 64);
  description =
    item.description.length > description.length
      ? `${description}...`
      : description;

  const ratingText = `${item.rating} (${item.reviews.length} Reviews)`;

  return (
    <div className={css.container}>
      <div className={css.thumb}>
        <img src={imageSrc} alt={item.name} loading="lazy" />
      </div>
      <div className={css.info}>
        <div className={css.heading}>
          <h3 className={css.header}>{item.name}</h3>
          <div className={css.priceContainer}>
            <p className={css.price}>{price}</p>
            <button
              className={`${css.favoriteButton} ${
                isFavorite ? css.isFavorite : css.isNotFavorite
              }`}
              onClick={() => onClickFavorites(item._id)}
            >
              <svg width={24} height={24}>
                <use href={`${sprite}#heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.ratingContainer}>
          <p className={css.rating}>
            <span className={css.ratingIconContainer}>
              <svg width={16} height={16}>
                <use href={`${sprite}#star`}></use>
              </svg>
            </span>
            <span className={css.ratingText}>{ratingText}</span>
          </p>
          <p className={css.location}>
            <span className={css.locationIconContainer}>
              <svg width={16} height={16}>
                <use href={`${sprite}#map-pin`}></use>
              </svg>
            </span>
            <span className={css.locationText}>{item.location}</span>
          </p>
        </div>
        <p className={css.description}>{description}</p>
        <FeatureList item={item} className={css.featureList} />
        <Button
          className={css.button}
          onClick={() => onClickShowMore(item._id)}
        >
          Show more
        </Button>
      </div>
    </div>
  );
}
