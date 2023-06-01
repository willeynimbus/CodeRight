export const Book = (props) => {
  const { img, title, author, number, button } = props;
  //console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
      <a href={button} target="blank">
        <button>Checkout</button>
      </a>
    </article>
  );
};
