import css from './FilterItem.module.css';

export default function FilterItem({ children }) {
  return <li className={css.item}>{children}</li>;
}
