
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@example.com',
    timeZone: 'America/New_York',
    publicBookingLink: 'flowtime.com/dr-sarah-johnson'
  });

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center space-x-4">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                SJ
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
                <p className="text-gray-600">{profileData.email}</p>
              </div>
            </div>

            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="hours">Working Hours</TabsTrigger>
                <TabsTrigger value="breaks">Breaks</TabsTrigger>
                <TabsTrigger value="timeoff">Time Off</TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="profileName">Profile Name</Label>
                      <Input
                        id="profileName"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeZone">Time Zone</Label>
                      <Select value={profileData.timeZone} onValueChange={(value) => setProfileData({ ...profileData, timeZone: value })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                          <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                          <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bookingLink">Public Booking Link</Label>
                      <Input
                        id="bookingLink"
                        value={profileData.publicBookingLink}
                        onChange={(e) => setProfileData({ ...profileData, publicBookingLink: e.target.value })}
                      />
                    </div>
                  </div>
                  <Button className="mt-4">Save Changes</Button>
                </Card>
              </TabsContent>

              <TabsContent value="integrations">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Integrations</h3>
                  <p className="text-gray-600">Connect with your favorite tools and services.</p>
                </Card>
              </TabsContent>

              <TabsContent value="services">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Services</h3>
                  <p className="text-gray-600">Manage your bookable services and pricing.</p>
                </Card>
              </TabsContent>

              <TabsContent value="hours">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
                  <p className="text-gray-600">Set your availability for bookings.</p>
                </Card>
              </TabsContent>

              <TabsContent value="breaks">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Breaks</h3>
                  <p className="text-gray-600">Configure break times between appointments.</p>
                </Card>
              </TabsContent>

              <TabsContent value="timeoff">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Time Off</h3>
                  <p className="text-gray-600">Manage your vacation and unavailable periods.</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Profile;
