import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
import Loading from './Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Navigate } from 'react-router';

const Profile = () => {
    
      const { user,loading} = use(AuthContext);
    
       const [name, setName] = useState(user?.displayName || '');
       const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
       const [isSaved, setIsSaved] = useState(false);

       if(loading){
        return <Loading></Loading>
       }
  if (!user) {
    return <Navigate to="/auth/login" replace></Navigate>;
  }

 

  const handleSubmit = (e) => {
    e.preventDefault();

    user.displayName = name;
    user.photoURL = photoURL;
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000); // Feedback
  };

  return (
    <div>
        <Header></Header>
    <div className="max-w-md mx-auto mt-10 p-6 shadow-md border rounded">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>

      <div className="mb-4 text-center">
        <img
          src={photoURL}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-2"
        />
        <p><strong>Email:</strong> {user?.email}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e?.target?.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Photo URL</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-secondary rounded-full"
        >
          Save Changes
        </button>

        {isSaved && <p className="text-green-600 mt-2">Profile updated!</p>}
      </form>
     
      </div>
     <footer className='mt-7'>
     <Footer></Footer>
     </footer>
    </div>
      );
};

export default Profile;