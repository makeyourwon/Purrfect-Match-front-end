const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/profile/` // subject to change

async function getProfile() {
  try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${BASE_URL}`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}`,
                       'Content-Type': 'application/json' }
        });
        const profile = await res.json();
        return profile;
    } catch (error) {
        console.error('Error fetching profile:', error);
    }
}

async function updateProfile(profileData) {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}`, {
      method: 'PUT', 
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileData)
    });
    const updatedProfile = await res.json();
    return updatedProfile;
  } catch (error) {
    console.error('Error updating profile:', error);
  }
}

export { getProfile, updateProfile }