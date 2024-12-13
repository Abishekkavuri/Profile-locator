import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ profile, onSummaryClick }) => (
  <div className="profile-card">
    <img src={profile.photo} alt={profile.name} className="profile-photo" />
    <h3>{profile.name}</h3>
    <p>{profile.description}</p>
    <button onClick={() => onSummaryClick(profile)}>Summary</button>
  </div>
);

export default ProfileCard;