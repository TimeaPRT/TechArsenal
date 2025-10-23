"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  joinedDate: string;
  favoriteProperties: number;
  savedSearches: number;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    // Simulate fetching user data (in real app, this would be from your backend)
    const userData: UserProfile = {
      name: "John Doe",
      email: "john@example.com",
      phone: "(555) 123-4567",
      joinedDate: "January 2024",
      favoriteProperties: 5,
      savedSearches: 3
    };
    setUser(userData);
    setEditForm({
      name: userData.name,
      email: userData.email,
      phone: userData.phone
    });
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      setUser({
        ...user,
        ...editForm
      });
    }
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancelEdit = () => {
    if (user) {
      setEditForm({
        name: user.name,
        email: user.email,
        phone: user.phone
      });
    }
    setIsEditing(false);
  };

  const handleLogout = () => {
    // In a real app, you'd clear authentication tokens here
    alert("Logged out successfully!");
    router.push("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">Member since {user.joinedDate}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
              >
                {isEditing ? "Cancel Edit" : "Edit Profile"}
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Information */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Profile Information</h2>
              
              {isEditing ? (
                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={editForm.phone}
                      onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <p className="text-gray-900 font-medium">{user.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <p className="text-gray-900 font-medium">{user.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <p className="text-gray-900 font-medium">{user.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                      <p className="text-gray-900 font-medium">{user.joinedDate}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Activity Stats */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Your Activity</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{user.favoriteProperties}</div>
                  <div className="text-gray-700 font-medium">Favorite Properties</div>
                  <p className="text-sm text-gray-600 mt-2">Properties you've saved</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">{user.savedSearches}</div>
                  <div className="text-gray-700 font-medium">Saved Searches</div>
                  <p className="text-sm text-gray-600 mt-2">Your custom property searches</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-200">
                  View Favorite Properties
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-200">
                  Saved Searches
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-200">
                  Property Alerts
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-200">
                  Message Center
                </button>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Account Settings</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-200">
                  Change Password
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-200">
                  Notification Preferences
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-200">
                  Privacy Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}