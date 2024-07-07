import css from './FeatureList.module.css';
import FeatureItem from '../FeatureItem/FeatureItem';
import sprite from '../../assets/sprite.svg';

const features = {
  // form: { main: true, name: 'value', iconByValue: true },
  adults: { main: true, quantity: true, name: 'key', icon: 'users' },
  children: { main: true, quantity: true, name: 'key', icon: 'users' },
  engine: { main: true, name: 'value', icon: 'engine' },
  transmission: {
    main: true,
    name: 'value',
    icon: 'transmission',
  },
  airConditioner: {
    name: 'key',
    iconByKey: true,
  },
  kitchen: {
    name: 'key',
    iconByKey: true,
  },
  beds: {
    quantity: true,
    name: 'key',
    iconByKey: true,
  },
  TV: {
    name: 'key',
    iconByKey: true,
  },
  CD: {
    name: 'key',
    iconByKey: true,
  },
  radio: {
    name: 'key',
    iconByKey: true,
  },
  shower: {
    name: 'key',
    iconByKey: true,
  },
  toilet: {
    name: 'key',
    iconByKey: true,
  },
  freezer: {
    name: 'key',
    iconByKey: true,
  },
  hob: {
    quantity: true,
    name: 'key',
    iconByKey: true,
  },
  microwave: {
    name: 'key',
    iconByKey: true,
  },
  gas: {
    name: 'value',
    iconByKey: true,
  },
  water: {
    name: 'value',
    iconByKey: true,
  },
};

const getItemData = (key, item) => {
  const params = features[key];
  const itemData = params.main
    ? item[key]
    : item.details
    ? item.details[key]
    : null;

  if (!itemData) return null;

  const result = { key };

  if (params.iconByValue) result.icon = itemData;
  else if (params.iconByKey) result.icon = key;
  else result.icon = params.icon;

  result.name = `${params.quantity ? itemData : ''} ${
    params.name === 'key' ? key : itemData
  }`.trim();

  result.iconClass = `icon-${key}`;
  return result;
};

export default function FeatureList({ className = '', item }) {
  const data = Object.keys(features)
    .map(key => getItemData(key, item))
    .filter(feature => feature !== null);

  return (
    <ul className={`${css.list} ${className}`}>
      {data.map(feature => (
        <FeatureItem
          key={feature.key}
          icon={`${sprite}#${feature.icon}`}
          iconClass={feature.iconClass}
          name={feature.name}
        />
      ))}
    </ul>
  );
}
