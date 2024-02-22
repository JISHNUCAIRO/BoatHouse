import  { useState} from 'react';
import '../../../assets/css/userdetails.css';

const Userdetails = () => {

  const [user, setUser] = useState({
    name: 'Ajay K',
    location: 'Green Valley, Anytown, USA',
    age: 38,
    contact: 'ajay@email.com | (555) 123-4567',
  });

  const [editedUser, setEditedUser] = useState({ ...user });
  const [isUserEditing, setIsUserEditing] = useState(false);

  const [farm, setFarm] = useState({
    farmName: 'Green Acres Farm',
    location: 'Green Valley, Anytown, USA',
    farmSize: '50 acres',
    crops: ['Wheat', 'Corn', 'Soybeans'],
    livestock: 'None',
  });

  const [editedFarm, setEditedFarm] = useState({ ...farm });
  const [isFarmEditing, setIsFarmEditing] = useState(false);

  const handleUserEdit = () => {
    setIsUserEditing(true);
  };

  const handleUserSave = () => {
    setUser({ ...editedUser });
    setIsUserEditing(false);

  };

  const handleUserCancel = () => {
    setEditedUser({ ...user });
    setIsUserEditing(false);
  };

  const handleFarmEdit = () => {
    setIsFarmEditing(true);
  };

  const handleFarmSave = () => {
    setFarm({ ...editedFarm });
    setIsFarmEditing(false);

  };

  const handleFarmCancel = () => {
    setEditedFarm({ ...farm });
    setIsFarmEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        {/* <img className="profile-photo" src={profileimg} alt="Profile" /> */}
        <h1 className="profile-title">{user.name}&apos;s Profile</h1>
      </div>
      <section className="user-details">
        <h2>User Details</h2>
        {isUserEditing ? (
          <>
            <label>Name: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
            />
            <br />
            <label>Location: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.location}
              onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
            />
            <br />
            <label>Age: </label>
            <input
              className="input-field"
              type="number"
              value={editedUser.age}
              onChange={(e) => setEditedUser({ ...editedUser, age: parseInt(e.target.value, 10) || 0 })}
            />
            <br />
            <label>Contact: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.contact}
              onChange={(e) => setEditedUser({ ...editedUser, contact: e.target.value })}
            />
            <br />
            <button className="btn-save" onClick={handleUserSave}>Save</button>
            <button className="btn-cancel" onClick={handleUserCancel}>Cancel</button>
          </>
        ) : (
          <>
            <p>Name: {user.name}</p>
            <p>Location: {user.location}</p>
            <p>Age: {user.age}</p>
            <p>Contact: {user.contact}</p>
            <button className="btn-edit" onClick={handleUserEdit}>Edit</button>
          </>
        )}
      </section>

      <section className="farm-details">
        <h2>Farm Details</h2>
        {isFarmEditing ? (
          <>
            <label>Farm Name: </label>
            <input
              className="input-field"
              type="text"
              value={editedFarm.farmName}
              onChange={(e) => setEditedFarm({ ...editedFarm, farmName: e.target.value })}
            />
            <br />
            <label>Location: </label>
            <input
              className="input-field"
              type="text"
              value={editedFarm.location}
              onChange={(e) => setEditedFarm({ ...editedFarm, location: e.target.value })}
            />
            <br />
            <label>FarmSize: </label>
            <input
              className="input-field"
              type="text"
              value={editedFarm.farmSize}
              onChange={(e) => setEditedFarm({ ...editedFarm, farmSize: e.target.value })}
            />
            <br />
            <label>LiveStock: </label>
            <input
              className="input-field"
              type="text"
              value={editedFarm.livestock}
              onChange={(e) => setEditedFarm({ ...editedFarm, livestock: e.target.value })}
            />
          
            <br />
            <button className="btn-save" onClick={handleFarmSave}>Save</button>
            <button className="btn-cancel" onClick={handleFarmCancel}>Cancel</button>
          </>
        ) : (
          <>
            <p>Farm Name: {farm.farmName}</p>
            <p>Location: {farm.location}</p>
            <p>FarmSize: {farm.farmSize}</p>
            <p>LiveStock: {farm.livestock}</p>
   
            <button className="btn-edit" onClick={handleFarmEdit}>Edit</button>
          </>
        )}
      </section>
          </div>
  );
};

export default Userdetails;