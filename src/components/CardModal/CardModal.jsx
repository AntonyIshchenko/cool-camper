import ReactModal from 'react-modal';
import { useState } from 'react';

import css from './CardModal.module.css';
import sprite from '../../assets/sprite.svg';
// import { useSelector } from 'react-redux';
import BookForm from '../BookForm/BookForm';
import ModalNav from '../ModalNav/ModalNav';
import ReviewList from '../ReviewList/ReviewList';
import FeatureModal from '../FeatureModal/FeatureModal';

const TAB_LIST = ['features', 'reviews'];

// ReactModal.defaultStyles.overlay.backgroundColor = 'black';
ReactModal.setAppElement(document.getElementById('root'));

export default function CardModal({ isOpen = false, item = {}, onChange }) {
  const [activeTab, setActiveTab] = useState(0);

  const price = item.price
    ? `€${item.price
        .toLocaleString('de-DE', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })
        .replaceAll('.', '')}`
    : '';

  const ratingText = `${item.rating} (${
    item.reviews ? item.reviews.length : 0
  } Reviews)`;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => onChange(null)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      className={css.modal}
      overlayClassName={`${css.overlay} ${isOpen ? css.overlayIsOpen : ''}`}
    >
      <h3 className={css.header}>{item.name} </h3>
      <button className={css.closeButton} onClick={() => onChange(null)}>
        <svg width={16} height={16}>
          <use href={`${sprite}#x`}></use>
        </svg>
      </button>
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
      <p className={css.price}>{price}</p>
      {item.gallery && item.gallery.length && (
        <ul className={css.imageList}>
          {item.gallery.map((el, i) => (
            <li className={css.thumb} key={i}>
              <img src={el} alt={item.name} loading="lazy" />
            </li>
          ))}
        </ul>
      )}
      <p className={css.description}>{item.description}</p>
      <ModalNav tabList={TAB_LIST} active={activeTab} onChange={setActiveTab} />
      <div className={css.tabContainer}>
        {activeTab === 0 && <FeatureModal item={item} />}
        {activeTab === 1 && item.reviews && (
          <ReviewList reviews={item.reviews} />
        )}
        <BookForm />
      </div>
    </ReactModal>
  );
}
