
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Share, MoreHorizontal } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: '15 Minutes Meeting',
      duration: '15 mins',
      price: 'Free',
      icon: '🎤'
    },
    {
      id: 2,
      name: '30 Minutes Meeting',
      duration: '30 mins',
      price: 'Free',
      icon: '🎤'
    },
    {
      id: 3,
      name: '1 Hour Meeting',
      duration: '60 mins',
      price: 'Free',
      icon: '🎤'
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Services & classes</h1>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4" />
                </Button>
                <Button size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New service category
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-64">
                <Card className="p-4">
                  <div className="space-y-3">
                    <div>
                      <Button variant="ghost" className="w-full justify-start">
                        Services (3)
                      </Button>
                    </div>
                    <div>
                      <Button variant="ghost" className="w-full justify-start">
                        Classes
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Services (3)</h2>
                  <div className="relative w-80">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Services" className="pl-10" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  {services.map((service) => (
                    <Card key={service.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl">{service.icon}</div>
                          <div>
                            <h3 className="font-medium">{service.name}</h3>
                            <p className="text-sm text-gray-600">
                              {service.duration} · {service.price}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">👤</Badge>
                          <Button variant="outline" size="sm">
                            <Share className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Services;
