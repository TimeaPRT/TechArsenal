import { useState } from 'react';
import { User, UserProfile } from '../types';
import { User as UserIcon, Mail, Phone, MapPin, Calendar, Edit2, Save, X, Bell, Moon, Shirt, LogOut } from 'lucide-react';

interface ProfileProps {
  user: User;
  onUpdateProfile: (profile: UserProfile) => void;
  onPageChange: (page: string) => void;
  onLogout: () => void;
}

const Profile = ({ user, onUpdateProfile, onPageChange, onLogout }: ProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  const [formData, setFormData] = useState({
    firstName: user.profile?.firstName || '',
    lastName: user.profile?.lastName || '',
    phone: user.profile?.phone || '',
    address: user.profile?.address || {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    preferences: user.profile?.preferences || {
      newsletter: false,
      smsNotifications: false,
      darkMode: true,
      sizePreference: ''
    }
  });

  const handleSave = () => {
    const updatedProfile: UserProfile = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      address: formData.address,
      preferences: formData.preferences,
      joinDate: user.profile?.joinDate || new Date().toISOString()
    };
    
    onUpdateProfile(updatedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      firstName: user.profile?.firstName || '',
      lastName: user.profile?.lastName || '',
      phone: user.profile?.phone || '',
      address: user.profile?.address || {
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
      },
      preferences: user.profile?.preferences || {
        newsletter: false,
        smsNotifications: false,
        darkMode: true,
        sizePreference: ''
      }
    });
    setIsEditing(false);
  };

  const formatJoinDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-4 sm:mb-6"
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            Your Dark Profile
          </h1>
          <p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            Manage your account, preferences, and dark fashion journey.
          </p>
        </div>

        <div className="bg-zinc-900 border border-red-900/20 rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-red-900/20 to-zinc-800 p-4 sm:p-6 md:p-8 border-b border-red-900/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center">
                  <UserIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h2 
                    className="text-xl sm:text-2xl font-bold text-red-400"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {user.name}
                  </h2>
                  <div className="text-gray-300 flex items-center space-x-2 mt-1 text-sm sm:text-base" style={{ fontFamily: 'Crimson Text, serif' }}>
                    <Mail className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                  {user.profile?.joinDate && (
                    <div className="text-gray-400 text-xs sm:text-sm flex items-center space-x-2 mt-1" style={{ fontFamily: 'Crimson Text, serif' }}>
                      <Calendar className="w-4 h-4" />
                      <span>Member since {formatJoinDate(user.profile.joinDate)}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    <Edit2 className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                )}
                
                {/* Logout Button - Visible on all screens */}
                <button
                  onClick={onLogout}
                  className="flex items-center justify-center space-x-2 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-4 sm:px-6 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-red-900/20">
            <div className="flex space-x-4 sm:space-x-8 px-4 sm:px-8 overflow-x-auto">
              {['profile', 'preferences', 'orders'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 sm:py-4 px-2 border-b-2 transition-colors duration-300 capitalize whitespace-nowrap text-sm sm:text-base ${
                    activeTab === tab
                      ? 'border-red-500 text-red-400'
                      : 'border-transparent text-gray-400 hover:text-red-400'
                  }`}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6 md:p-8">
            {activeTab === 'profile' && (
              <div className="space-y-4 sm:space-y-6">
                <h3 
                  className="text-xl sm:text-2xl font-bold text-red-400 mb-4 sm:mb-6"
                  style={{ fontFamily: 'Creepster, cursive' }}
                >
                  Personal Information
                </h3>

                {isEditing ? (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <div className="text-red-400 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Cinzel, serif' }}>
                          First Name
                        </div>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full bg-zinc-800 border border-red-900/30 rounded-lg px-3 sm:px-4 py-2 text-white focus:border-red-500 focus:outline-none text-sm sm:text-base"
                          style={{ fontFamily: 'Crimson Text, serif' }}
                        />
                      </div>
                      <div>
                        <div className="text-red-400 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Cinzel, serif' }}>
                          Last Name
                        </div>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="w-full bg-zinc-800 border border-red-900/30 rounded-lg px-3 sm:px-4 py-2 text-white focus:border-red-500 focus:outline-none text-sm sm:text-base"
                          style={{ fontFamily: 'Crimson Text, serif' }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="text-red-400 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Cinzel, serif' }}>
                        Phone Number
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-zinc-800 border border-red-900/30 rounded-lg px-3 sm:px-4 py-2 text-white focus:border-red-500 focus:outline-none text-sm sm:text-base"
                        style={{ fontFamily: 'Crimson Text, serif' }}
                      />
                    </div>

                    <div>
                      <div className="text-red-400 mb-3 sm:mb-4 flex items-center space-x-2 text-base sm:text-lg" style={{ fontFamily: 'Cinzel, serif' }}>
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Address</span>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        <input
                          type="text"
                          placeholder="Street Address"
                          value={formData.address.street}
                          onChange={(e) => setFormData({
                            ...formData, 
                            address: {...formData.address, street: e.target.value}
                          })}
                          className="w-full bg-zinc-800 border border-red-900/30 rounded-lg px-3 sm:px-4 py-2 text-white focus:border-red-500 focus:outline-none text-sm sm:text-base"
                          style={{ fontFamily: 'Crimson Text, serif' }}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                          <input
                            type="text"
                            placeholder="City"
                            value={formData.address.city}
                            onChange={(e) => setFormData({
                              ...formData, 
                              address: {...formData.address, city: e.target.value}
                            })}
                            className="bg-zinc-800 border border-red-900/30 rounded-lg px-3 sm:px-4 py-2 text-white focus:border-red-500 focus:outline-none text-sm sm:text-base"
                            style={{ fontFamily: 'Crimson Text, serif' }}
                          />
                          <input
                            type="text"
                            placeholder="State"
                            value={formData.address.state}
                            onChange={(e) => setFormData({
                              ...formData, 
                              address: {...formData.address, state: e.target.value}
                            })}
                            className="bg-zinc-800 border border-red-900/30 rounded-lg px-3 sm:px-4 py-2 text-white focus:border-red-500 focus:outline-none text-sm sm:text-base"
                            style={{ fontFamily: 'Crimson Text, serif' }}
                          />
                          <input
                            type="text"
                            placeholder="ZIP Code"
                            value={formData.address.zipCode}
                            onChange={(e) => setFormData({
                              ...formData, 
                              address: {...formData.address, zipCode: e.target.value}
                            })}
                            className="bg-zinc-800 border border-red-900/30 rounded-lg px-3 sm:px-4 py-2 text-white focus:border-red-500 focus:outline-none text-sm sm:text-base"
                            style={{ fontFamily: 'Crimson Text, serif' }}
                          />
                          <input
                            type="text"
                            placeholder="Country"
                            value={formData.address.country}
                            onChange={(e) => setFormData({
                              ...formData, 
                              address: {...formData.address, country: e.target.value}
                            })}
                            className="bg-zinc-800 border border-red-900/30 rounded-lg px-3 sm:px-4 py-2 text-white focus:border-red-500 focus:outline-none text-sm sm:text-base"
                            style={{ fontFamily: 'Crimson Text, serif' }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                      <button
                        onClick={handleSave}
                        className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                        style={{ fontFamily: 'Cinzel, serif' }}
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Changes</span>
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center justify-center space-x-2 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-4 sm:px-6 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                        style={{ fontFamily: 'Cinzel, serif' }}
                      >
                        <X className="w-4 h-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <div className="text-red-400 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Cinzel, serif' }}>
                          First Name
                        </div>
                        <div className="text-gray-300 text-sm sm:text-base" style={{ fontFamily: 'Crimson Text, serif' }}>
                          {user.profile?.firstName || 'Not set'}
                        </div>
                      </div>
                      <div>
                        <div className="text-red-400 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Cinzel, serif' }}>
                          Last Name
                        </div>
                        <div className="text-gray-300 text-sm sm:text-base" style={{ fontFamily: 'Crimson Text, serif' }}>
                          {user.profile?.lastName || 'Not set'}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-red-400 mb-2 flex items-center space-x-2 text-sm sm:text-base" style={{ fontFamily: 'Cinzel, serif' }}>
                        <Phone className="w-4 h-4" />
                        <span>Phone Number</span>
                      </div>
                      <div className="text-gray-300 text-sm sm:text-base" style={{ fontFamily: 'Crimson Text, serif' }}>
                        {user.profile?.phone || 'Not set'}
                      </div>
                    </div>

                    {user.profile?.address && (
                      <div>
                        <div className="text-red-400 mb-3 sm:mb-4 flex items-center space-x-2 text-base sm:text-lg" style={{ fontFamily: 'Cinzel, serif' }}>
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Address</span>
                        </div>
                        <div className="text-gray-300 text-sm sm:text-base" style={{ fontFamily: 'Crimson Text, serif' }}>
                          {user.profile.address.street && `${user.profile.address.street}, `}
                          {user.profile.address.city && `${user.profile.address.city}, `}
                          {user.profile.address.state && `${user.profile.address.state} `}
                          {user.profile.address.zipCode && `${user.profile.address.zipCode}`}
                          {user.profile.address.country && `, ${user.profile.address.country}`}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-4 sm:space-y-6">
                <h3 
                  className="text-xl sm:text-2xl font-bold text-red-400 mb-4 sm:mb-6"
                  style={{ fontFamily: 'Creepster, cursive' }}
                >
                  Preferences
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-zinc-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                      <div>
                        <div className="text-red-400 font-semibold text-sm sm:text-base" style={{ fontFamily: 'Cinzel, serif' }}>
                          Newsletter
                        </div>
                        <div className="text-gray-300 text-xs sm:text-sm" style={{ fontFamily: 'Crimson Text, serif' }}>
                          Receive updates about new dark collections
                        </div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferences.newsletter}
                        onChange={(e) => setFormData({
                          ...formData,
                          preferences: {...formData.preferences, newsletter: e.target.checked}
                        })}
                        className="sr-only peer"
                      />
                      <div className="w-10 h-5 sm:w-11 sm:h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 sm:p-4 bg-zinc-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                      <div>
                        <div className="text-red-400 font-semibold text-sm sm:text-base" style={{ fontFamily: 'Cinzel, serif' }}>
                          SMS Notifications
                        </div>
                        <div className="text-gray-300 text-xs sm:text-sm" style={{ fontFamily: 'Crimson Text, serif' }}>
                          Get order updates via text message
                        </div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferences.smsNotifications}
                        onChange={(e) => setFormData({
                          ...formData,
                          preferences: {...formData.preferences, smsNotifications: e.target.checked}
                        })}
                        className="sr-only peer"
                      />
                      <div className="w-10 h-5 sm:w-11 sm:h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 sm:p-4 bg-zinc-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                      <div>
                        <div className="text-red-400 font-semibold text-sm sm:text-base" style={{ fontFamily: 'Cinzel, serif' }}>
                          Dark Mode
                        </div>
                        <div className="text-gray-300 text-xs sm:text-sm" style={{ fontFamily: 'Crimson Text, serif' }}>
                          Always embrace the darkness
                        </div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferences.darkMode}
                        onChange={(e) => setFormData({
                          ...formData,
                          preferences: {...formData.preferences, darkMode: e.target.checked}
                        })}
                        className="sr-only peer"
                      />
                      <div className="w-10 h-5 sm:w-11 sm:h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>

                  <div className="p-3 sm:p-4 bg-zinc-800 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <Shirt className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                      <div className="text-red-400 font-semibold text-sm sm:text-base" style={{ fontFamily: 'Cinzel, serif' }}>
                        Size Preference
                      </div>
                    </div>
                    <select
                      value={formData.preferences.sizePreference}
                      onChange={(e) => setFormData({
                        ...formData,
                        preferences: {...formData.preferences, sizePreference: e.target.value}
                      })}
                      className="w-full bg-zinc-700 border border-red-900/30 rounded-lg px-3 sm:px-4 py-2 text-white focus:border-red-500 focus:outline-none text-sm sm:text-base"
                      style={{ fontFamily: 'Crimson Text, serif' }}
                    >
                      <option value="">Select your preferred size</option>
                      <option value="XS">XS - Extra Small</option>
                      <option value="S">S - Small</option>
                      <option value="M">M - Medium</option>
                      <option value="L">L - Large</option>
                      <option value="XL">XL - Extra Large</option>
                      <option value="XXL">XXL - 2X Large</option>
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Preferences</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-4 sm:space-y-6">
                <h3 
                  className="text-xl sm:text-2xl font-bold text-red-400 mb-4 sm:mb-6"
                  style={{ fontFamily: 'Creepster, cursive' }}
                >
                  Order History
                </h3>

                <div className="text-center py-8 sm:py-12">
                  <div className="bg-zinc-800 rounded-lg p-6 sm:p-8 max-w-md mx-auto">
                    <div className="text-gray-300 mb-4 text-sm sm:text-base" style={{ fontFamily: 'Crimson Text, serif' }}>
                      You haven't placed any orders yet.
                    </div>
                    <button
                      onClick={() => onPageChange('home')}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      Start Shopping
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;