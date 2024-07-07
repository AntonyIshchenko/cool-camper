import css from './ReviewList.module.css';
import sprite from '../../assets/sprite.svg';

const RATING_ARRAY = [1, 2, 3, 4, 5];

export default function ReviewList({ reviews }) {
  return reviews ? (
    <ul className={css.list}>
      {reviews.map((rev, i) => (
        <li className={css.item} key={i}>
          <div className={css.header}>
            <div className={css.headerLetter}>
              {rev.reviewer_name.slice(0, 1)}
            </div>
            <div className={css.nameContainer}>
              <h3 className={css.name}>{rev.reviewer_name}</h3>
              <ul className={css.ratingList}>
                {RATING_ARRAY.map(r => (
                  <li
                    key={r}
                    className={
                      r <= rev.reviewer_rating
                        ? css.ratingTrue
                        : css.ratingFalse
                    }
                  >
                    <svg width={16} height={16}>
                      <use href={`${sprite}#star`}></use>
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className={css.comment}>{rev.comment}</p>
        </li>
      ))}
    </ul>
  ) : (
    <div></div>
  );
}
