import { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService';
import './ProfileForm.css'
import { Link } from 'react-router-dom';


const ProfileForm = ({ handleLogout }) => {
  const [profile, setProfile] = useState({
    name: null,
    age: null,
    location: null,
    phone: null,
    favorites: null, 
  });

  const [showModal, setShowModal] = useState(false)  // this is for the modal for when a user updates their profile

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile();
      setProfile(profileData);
    };
    fetchProfile(); 
  }, []);
  if (!profile) return <div>Loading profile...</div>;

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleChange = (event, parameter) => {
    setProfile({ ...profile, [parameter]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from causing a page reload
    const updatedProfile = await profileService.updateProfile(profile);
    setShowModal(false)
    window.location.reload()
  };

  return (
    <>
    <div className="profile-container">
      <div className="profile-info">
      <h1 className="profile-name">{profile.name}</h1>
      <h1>Age: <span className="profile-age">{profile.age}</span></h1>
      <h1>Location: <span className="profile-location">{profile.location}</span></h1>
      <h1>Phone: <span className="profile-phone">{profile.phone}</span></h1>
        <Link to="/favorites">
        <button className="favorites-button"> Go to Favorites</button>
        </Link>
        <button onClick={handleOpenModal}>Update Profile</button>
      </div>
    </div> 
    
    {showModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <h2>Update Profile</h2>
          <form onSubmit={handleSubmit} className="update-form">
            <input 
            type="text"
            value={profile.name}
            onChange={(event) => handleChange(event, 'name')}
            placeholder="Profile Name"
            />
            <input 
            type="number"
            value={profile.age}
            onChange={(event) => handleChange(event, 'age')}
            placeholder="Age"
            />
            <input 
            type="text"
            value={profile.location}
            onChange={(event) => handleChange(event, 'location')}
            placeholder="Location"
            />
            <input 
            type="tel"
            value={profile.phone}
            onChange={(event) => handleChange(event, 'phone')}
            placeholder="123-456-7890"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )}
    </>
  );
};

export default ProfileForm