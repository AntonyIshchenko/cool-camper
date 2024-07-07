import css from './FilterForm.module.css';
import FilterItem from '../FilterItem/FilterItem';
import FilterList from '../FilterList/FilterList';
import Button from '../Button/Button';

export default function FilterForm() {
  return (
    <form className={css.form}>
      <label htmlFor="">
        <input type="text" />
      </label>

      <p>Filters</p>
      <FilterList header="Vehicle equipment">{}</FilterList>
      <FilterList header="Vehicle type">{}</FilterList>
      <Button className={css.button}>Search</Button>
    </form>
  );
}
