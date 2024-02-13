import React from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import './Profile.css'

const Profile = ({ handleLogout}) => {
  return (
    <>
    <div className="profile-page-container">
      <div className="profile-title-container">
        <h1>My Profile</h1>
        </div>
        <div className="profile-form-container">
      <ProfileForm  handleLogout={handleLogout}/>
      </div>
    </div>
    </>
  )
}

export default Profile;