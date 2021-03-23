const Personaje = (props) => {
  const personaje = props.personaje;
  console.log(personaje);
  return (
    <tr className="personaje">
      <td>{personaje.nombre}</td>
      <td>Menos de 50 años</td>
      <td><img className="gif" src="https://media4.giphy.com/media/26tjZvLX08nC7KTpm/giphy.gif?cid=8f9de43ba14aa7caf8bb1ec6fd2f035977fd22568b8a82a8&rid=giphy.gif&ct=g" alt="Marge Simpson" /></td>
    </tr>
  );
};

export default Personaje;
