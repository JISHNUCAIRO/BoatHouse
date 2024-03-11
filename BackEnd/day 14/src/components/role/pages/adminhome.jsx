
import '../../../assets/css/adminhome.css';
import Footer from './footer';
const AdminHome = () => {
    const handleDelete = () => {
       
        console.log("Deleted!");
      };
    
      const handleEdit = () => {
       
        console.log("Edit!");
      };
  return (
 
      <div className="main-content">
        <div className="content">
          <h1 className="hh">The Available Boats</h1>
          {/* <p className="hp">Explore our services and products for all your boating needs. Explore the beauty of the waters with us</p> */}
          <div className="card-container">
  <div className="card-content">
    <img src="/src/assets/images/boat1.jpg" height={170} alt="" />
    <h2 className="card-title">Mudaliarkuppam Boat House</h2>
    <button onClick={handleDelete} className="delete-button">Delete</button>
  <button onClick={handleEdit} className="edit-button">Edit</button>
  </div>
  <div className="card-content">
    <img src="/src/assets/images/boat2.jpg" height={170} alt="" />
    <h2 className="card-title">Nileshwar Houseboat</h2>
    <button onClick={handleDelete} className="delete-button">Delete</button>
  <button onClick={handleEdit} className="edit-button">Edit</button>
  </div>
  <div className="card-content">
    <img src="/src/assets/images/boat3.jpg" height={170} alt="" />
    <h2 className="card-title">Alleppey Houseboat Trip</h2>
    <button onClick={handleDelete} className="delete-button">Delete</button>
  <button onClick={handleEdit} className="edit-button">Edit</button>
  </div>
  <div className="card-content">
    <img src="/src/assets/images/boat4.jpg" height={170} alt="" />
    <h2 className="card-title">Kumarakom Houseboat Tour</h2>
    <button onClick={handleDelete} className="delete-button">Delete</button>
  <button onClick={handleEdit} className="edit-button">Edit</button>
  </div>
  <div className="card-content">
    <img src="/src/assets/images/boat5.jpg" height={170} alt="" />
    <h2 className="card-title">Alappuzha Houseboat</h2>
    <button onClick={handleDelete} className="delete-button">Delete</button>
  <button onClick={handleEdit} className="edit-button">Edit</button>
  </div>
  <div className="card-content">
  <img src="/src/assets/images/beautiful-shot-small-lake-with-wooden-rowboat-focus-amazing-clouds-sky.jpg" height={170} alt="" />
  <h2 className="card-title">OOTY LAKE BOAT HOUSE</h2>
  <button onClick={handleDelete} className="delete-button">Delete</button>
  <button onClick={handleEdit} className="edit-button">Edit</button>
  
 
</div>

</div>
</div>

    <Footer/>
    </div>
  );
}

export default AdminHome;
