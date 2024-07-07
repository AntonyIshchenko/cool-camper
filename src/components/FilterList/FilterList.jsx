import css from './FilterList.module.css';

export default function FilterList({ header, children }) {
  return (
    <div className={css.container}>
      <h3 className={css.header}>{header}</h3>
      <ul className={css.list}>{children}</ul>;
    </div>
  );
}
