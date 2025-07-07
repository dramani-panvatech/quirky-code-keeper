
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import { Card } from '@/components/ui/card';

const Payment = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Payment</h1>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Payment Settings</h3>
              <p className="text-gray-600">Configure your payment methods and billing settings.</p>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Payment;
