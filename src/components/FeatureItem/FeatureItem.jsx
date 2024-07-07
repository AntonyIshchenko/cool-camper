import css from './FeatureItem.module.css';

export default function FeatureItem({ icon, iconClass, name }) {
  return (
    <li className={css.item}>
      <span className={`${css.icon} ${iconClass}`}>
        <svg width={20} height={20}>
          <use href={icon}></use>
        </svg>
      </span>
      <span className={css.name}>{name}</span>
    </li>
  );
}
