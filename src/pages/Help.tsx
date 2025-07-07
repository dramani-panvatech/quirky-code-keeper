
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import { Card } from '@/components/ui/card';

const Help = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Help & Support</h1>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-600">Get assistance with your booking system and find answers to common questions.</p>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Help;
