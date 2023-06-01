export const Recom = (props) => {
  const { img, title, author, button } = props;
  //console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <a href={button} target="blank">
        <button>Checkout</button>
      </a>
    </article>
  );
};
