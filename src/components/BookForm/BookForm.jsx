import Button from '../Button/Button';
import css from './BookForm.module.css';

export default function BookForm() {
  const handleSubmit = e => {
    console.log('submit');
    // e.preventDefault();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h3 className={css.header}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={css.inputSet}>
        <input
          className={`${css.input}`}
          type="text"
          name="name"
          placeholder="Name"
          required
        />

        <input
          className={`${css.input}`}
          type="text"
          name="email"
          placeholder="Email"
          required
        />

        <input
          className={`${css.input}`}
          type="text"
          name="bookingDate"
          placeholder="Booking date"
          required
        />

        <textarea
          className={`${css.comment}`}
          type="text"
          name="comment"
          placeholder="Comment"
        ></textarea>
      </div>
      <Button className={css.button} onClick={handleSubmit}>
        Send
      </Button>
    </form>
  );
}
