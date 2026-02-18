function ColorList()
{
    const colors=["red", "blue", "green","orange"]
    return (
    <ul>
      {colors.map((color) => (
        <li key={color} style={{ color: color }}>
          {color}
        </li>
      ))}
    </ul>
  );
}

export default ColorList;
