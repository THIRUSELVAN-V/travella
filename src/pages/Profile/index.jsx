import React, { useState } from 'react';
import { useAuthStore } from '../../store/authStore';

export const Profile = () => {
  const user = useAuthStore((state) => state.user);
  const [activeTab, setActiveTab] = useState('profile');

  // Mock user data - in a real app, this would come from your API
  const userData = {
    name: user?.name || 'Sophia Carter',
    username: user?.email?.split('@')[0] || 'sophia.carter',
    email: user?.email || 'sophia.carter@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    memberSince: 'Jan 2020',
    tripsCompleted: 25,
    destinationsVisited: 18,
    bio: 'Travel enthusiast | Exploring the world, one city at a time',
    profileImage: user?.picture || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwrzBjqCHK1nT2WJcvls930hk2sWEbSVlO2hZNxGQ2EPDYJ2ReZ7xXwz8-rnpaNgoLSxmMqpAMe4-AIXb-I-1_saJTmjEGqZ1iCmFLySDObq5C-dIUZMyr6nKmco-V-zStYUfNgde1BbT2bNXb7bJhqFomjxpA_I9kpO1aJlsVprKrZ-hTBIIp5uqOHSr6Eja-1P2JmoodR-bbZhzLppkMoygQKIevuH9KwBGK24NpRswP76u0X81SWq1KSSEBO4hoLRP9E2kyXk5S'
  };

  const achievements = [
    { icon: 'military_tech', name: 'Globetrotter', color: 'text-yellow-400' },
    { icon: 'public', name: 'World Explorer', color: 'text-blue-400' },
    { icon: 'mountain_flag', name: 'Mountain Conqueror', color: 'text-green-400' },
    { icon: 'local_fire_department', name: 'Hot Streak', color: 'text-red-400' },
    { icon: 'reviews', name: 'Top Reviewer', color: 'text-purple-400' },
    { icon: 'camera_alt', name: 'Photographer', color: 'text-indigo-400' }
  ];

  const activities = [
    { 
      icon: 'book_online', 
      text: 'Booked trip to', 
      link: 'Paris', 
      time: '2w ago',
      bgColor: 'bg-blue-900/50',
      iconColor: 'text-blue-400'
    },
    { 
      icon: 'explore', 
      text: 'Explored', 
      link: 'Tokyo', 
      time: '1m ago',
      bgColor: 'bg-green-900/50',
      iconColor: 'text-green-400'
    },
    { 
      icon: 'grade', 
      text: 'Reviewed hotel in', 
      link: 'Rome', 
      time: '2m ago',
      bgColor: 'bg-yellow-900/50',
      iconColor: 'text-yellow-400'
    },
    { 
      icon: 'login', 
      text: 'Last login', 
      link: null, 
      time: 'Today',
      bgColor: 'bg-gray-700',
      iconColor: 'text-gray-400'
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile Info' },
    // { id: 'activities', label: 'Activities' },
    // { id: 'badges', label: 'Badges' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
    

      {/* Main Content */}
      <main className="flex-1 px-40 py-10">
        <div className="mx-auto max-w-5xl">
          {/* Profile Header */}
          <div className="bg-card rounded-2xl shadow-lg p-8">
            <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-start">
              <div className="relative">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 ring-4 ring-background ring-offset-4 ring-offset-card shadow-lg" 
                  style={{ 
                    backgroundImage: `url("${userData.profileImage}")`,
                    boxShadow: '0 0 20px 5px rgba(43, 173, 238, 0.3)'
                  }}
                ></div>
              </div>
              <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
                <div className="flex flex-col items-center justify-center md:items-start">
                  <p className="text-foreground text-2xl font-bold leading-tight tracking-tight">{userData.name}</p>
                  <p className="text-muted-foreground text-base font-normal leading-normal">@{userData.username}</p>
                  <p className="text-muted-foreground text-base font-normal leading-normal mt-2 max-w-md">{userData.bio}</p>
                </div>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-primary-foreground text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-primary-hover transition-colors">
                  <span className="truncate">Edit Profile</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8">
            <div className="border-b border-border">
              <nav aria-label="Tabs" className="-mb-px flex gap-8 px-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium ${
                      activeTab === tab.id
                        ? 'border-primary text-primary font-semibold'
                        : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {activeTab === 'profile' && (
                <div className="bg-card rounded-2xl shadow-lg p-6">
                  <h2 className="text-foreground text-xl font-bold leading-tight tracking-tight">User Details</h2>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-muted-foreground text-sm font-normal">Email</p>
                        <p className="text-foreground text-sm font-medium">{userData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-muted-foreground text-sm font-normal">Phone</p>
                        <p className="text-foreground text-sm font-medium">{userData.phone}</p>
                      </div>  
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-muted-foreground text-sm font-normal">Location</p>
                        <p className="text-foreground text-sm font-medium">{userData.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-muted-foreground text-sm font-normal">Member Since</p>
                        <p className="text-foreground text-sm font-medium">{userData.memberSince}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-muted-foreground text-sm font-normal">Trips Completed</p>
                        <p className="text-foreground text-sm font-medium">{userData.tripsCompleted}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-muted-foreground text-sm font-normal">Destinations Visited</p>
                        <p className="text-foreground text-sm font-medium">{userData.destinationsVisited}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'badges' && (
                <div className="bg-card rounded-2xl shadow-lg p-6">
                  <h2 className="text-foreground text-xl font-bold leading-tight tracking-tight">Achievements / Badges</h2>
                  <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex flex-col items-center gap-2 transform transition-transform duration-200 hover:scale-105">
                        <div className="flex items-center justify-center size-16 bg-muted rounded-full">
                          <span className={`material-symbols-outlined text-3xl ${achievement.color}`}>
                            {achievement.icon}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium text-center">{achievement.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Activities Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-lg p-6">
                <h2 className="text-foreground text-xl font-bold leading-tight tracking-tight">Recent Activities</h2>
                <div className="mt-6 flow-root">
                  <ul className="-mb-8" role="list">
                    {activities.map((activity, index) => (
                      <li key={index}>
                        <div className={`relative ${index < activities.length - 1 ? 'pb-8' : 'pb-2'}`}>
                          {index < activities.length - 1 && (
                            <span aria-hidden="true" className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-border"></span>
                          )}
                          <div className="relative flex space-x-3">
                            <div>
                              <span className={`flex h-8 w-8 items-center justify-center rounded-full ${activity.bgColor} ring-8 ring-card`}>
                                <span className={`material-symbols-outlined ${activity.iconColor} text-base`}>
                                  {/* {activity.icon} */}
                                </span>
                              </span>
                            </div>
                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  {activity.text} {activity.link && (
                                    <a className="font-medium text-foreground" href="#">{activity.link}</a>
                                  )}
                                </p>
                              </div>
                              <div className="whitespace-nowrap text-right text-sm text-muted-foreground">
                                <time>{activity.time}</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
