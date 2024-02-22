import '../../../assets/css/sidebar.css';
const SideBar = () => {
  return (
    <aside className="sidebar">
      <h2 className='si'>Categories</h2>
      <ul>
        <li><a href="#">Sailing Gear</a></li>
        <li><a href="#">Fishing Equipment</a></li>
        <li><a href="#">Boat Maintenance</a></li>
        <li><a href="#">Safety Equipment</a></li>
      </ul>
    </aside>
  );
}

export default SideBar;
