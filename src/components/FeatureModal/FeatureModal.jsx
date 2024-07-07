import css from './FeatureModal.module.css';
import FeatureList from '../FeatureList/FeatureList';

const DETAILS_LIST = [
  'form',
  'length',
  'width',
  'height',
  'tank',
  'consumption',
];

export default function FeatureModal({ item }) {
  return (
    <div className={css.container}>
      <FeatureList item={item} className={css.featureList} />
      <h3 className={css.header}>Vehicle details</h3>
      <ul className={css.detailsList}>
        {DETAILS_LIST.map(det => (
          <li className={css.detailsItem} key={det}>
            <p className={css.detailsText}>{det}</p>
            <p className={css.detailsText}>{item[det]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
