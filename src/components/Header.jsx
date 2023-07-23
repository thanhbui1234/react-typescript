const Header = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index + 1}>
            {" "}
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Header;
