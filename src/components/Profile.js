import React from 'react';

// React Component
function Profile(p) {
// JSX : Syntactical Sugar for HTML
    return (
        <div className="Profile">
            <div>
                <h3>Hi, nama saya {p.name}</h3>
                <p>Hobi saya {p.hobi}.</p>
            </div>
        </div>
    );
}
  
export default Profile;  