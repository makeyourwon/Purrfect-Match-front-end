import { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService';
import './Profile.css'
const Profile = ({ handleLogout }) => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    location: '',
    phone: ''
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile();
      setProfile(profileData);
    };
    fetchProfile(); 
  }, []);
console.log(profile)
  if (!profile) return <div>Loading profile...</div>;

  const handleChange = (event, parameter) => {
    setProfile({ ...profile, [parameter]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from causing a page reload
    const updatedProfile = await profileService.updateProfile(profile);
    console.log('Profile updated:', updatedProfile);
  };

  return (
    <>
    <div>
      <h1> My Profile </h1>
    </div>
    <div className='profile-info'>
      <h1>{profile.name}</h1>
      <h2>Age:{profile.age}</h2>
    </div>
    <div className='update-form'>
    <form onSubmit={handleSubmit}>
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
        placeholder="Phone Number"
      />
      <button type="submit" onClick={handleSubmit}>Update Profile</button>
    </form>
    </div>
    </>
  );
};

export default Profile;