import css from './ModalNav.module.css';

export default function ModalNav({ tabList, active, onChange }) {
  return (
    <nav className={css.container}>
      <ul className={css.list}>
        {tabList.map((tab, i) => (
          <li key={i}>
            <button
              type="button"
              className={`${css.button} ${active === i && css.activeTab}`}
              onClick={() => onChange(i)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
