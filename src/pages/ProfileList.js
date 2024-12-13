import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import MapComponent from '../components/MapComponent';
import './ProfileList.css';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const mockProfiles = [
        {
          id: 1,
          name: 'John Doe',
          photo: 'https://via.placeholder.com/150',
          description: 'A software engineer from San Francisco.',
          address: 'San Francisco, CA',
        },
        {
          id: 2,
          name: 'Jane Smith',
          photo: 'https://via.placeholder.com/150',
          description: 'A digital marketer from New York.',
          address: 'New York, NY',
        },
      ];
      setProfiles(mockProfiles);
    };

    fetchProfiles();
  }, []);

  return (
    <div className="profile-list-page">
      <h1>Profile Viewer</h1>
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSummaryClick={(profile) => setSelectedAddress(profile.address)}
          />
        ))}
      </div>
      {selectedAddress && <MapComponent address={selectedAddress} />}
    </div>
  );
};

export default ProfileList;