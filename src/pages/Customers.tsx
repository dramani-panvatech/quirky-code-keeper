
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Plus, Upload, Search } from 'lucide-react';

const Customers = () => {
  const [customers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Customers</h1>
            
            {customers.length === 0 ? (
              <div className="text-center py-32">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">ℹ</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No customers to display</h3>
                <div className="flex items-center justify-center space-x-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add customer
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Add customer</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-2xl">👤</span>
                          </div>
                          <Button variant="outline" size="sm">Profile</Button>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="font-medium">Main details</h3>
                          
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full name</Label>
                            <Input id="fullName" placeholder="Enter name" />
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2">
                            <div className="space-y-2">
                              <Label>Primary phone</Label>
                              <Select defaultValue="+1">
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="+1">+1</SelectItem>
                                  <SelectItem value="+91">+91</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="col-span-2 space-y-2">
                              <Label>&nbsp;</Label>
                              <Input placeholder="Enter phone number" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label>Primary email</Label>
                            <Input placeholder="Enter email address" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label>Company</Label>
                            <Input placeholder="Enter company name" />
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="font-medium">Address</h3>
                          
                          <div className="space-y-2">
                            <Label>Country</Label>
                            <Select defaultValue="india">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="india">India</SelectItem>
                                <SelectItem value="usa">USA</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label>Address</Label>
                            <Input placeholder="Enter street name, apt, suite, floor" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label>City</Label>
                            <Input placeholder="Enter city" />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4">
                          <Button variant="ghost">
                            <Upload className="h-4 w-4 mr-2" />
                            Import customers
                          </Button>
                          <div className="flex space-x-2">
                            <Button variant="ghost">Cancel</Button>
                            <Button>Save</Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Import customers
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">Options</Button>
                </div>
                
                {/* Customer list would go here */}
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Customers;
