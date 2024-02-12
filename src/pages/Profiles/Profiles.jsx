import { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService';

const Profile = ({ handleLogout }) => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    password: '',
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={profile.username}
        onChange={(event) => handleChange(event, 'username')}
        placeholder="Username"
      />
      <input
        type="email"
        value={profile.email}
        onChange={(event) => handleChange(event, 'email')}
        placeholder="Email Address"
      />
      <input
        type="password"
        value={profile.password}
        onChange={(event) => handleChange(event, 'password')}
        placeholder="Password"
      />
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
  );
};

export default Profile;