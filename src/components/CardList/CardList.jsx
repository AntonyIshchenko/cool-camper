import css from './CardList.module.css';

export default function CardList({ className = '', children }) {
  return <ul className={`${css.list} ${className}`}>{children}</ul>;
}
