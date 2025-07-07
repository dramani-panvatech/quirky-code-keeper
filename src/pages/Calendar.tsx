
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar as CalendarIcon, Plus, Share, ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const timeSlots = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM'];
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        <main className="flex-1">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <CalendarIcon className="h-6 w-6" />
                <h1 className="text-2xl font-bold">Your calendar</h1>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
            </div>

            {/* Calendar Navigation */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h2 className="text-lg font-semibold">{formatDate(selectedDate)}</h2>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  Today
                </Button>
              </div>
            </div>

            {/* Calendar Grid */}
            <Card className="p-0 overflow-hidden">
              <div className="grid grid-cols-8 border-b">
                <div className="p-4 text-sm font-medium text-gray-600"></div>
                {weekDays.map((day, index) => (
                  <div key={day} className="p-4 text-center border-l first:border-l-0">
                    <div className="text-sm font-medium text-gray-600">{day}</div>
                    <div className="text-lg font-semibold mt-1">{8 + index}</div>
                  </div>
                ))}
              </div>
              
              {timeSlots.map((time) => (
                <div key={time} className="grid grid-cols-8 border-b last:border-b-0">
                  <div className="p-4 text-sm text-gray-600 border-r">
                    {time}
                  </div>
                  {weekDays.map((day) => (
                    <div key={`${time}-${day}`} className="p-4 border-l first:border-l-0 min-h-[80px] hover:bg-gray-50">
                      {time === '12PM' && day === 'Mon' && (
                        <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium">
                          12:34
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </Card>

            {/* Left Sidebar */}
            <div className="absolute left-72 top-24 w-48">
              <Card className="p-4">
                <h3 className="font-medium mb-3">Your calendars</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-600 rounded"></div>
                    <span className="text-sm">sd sd</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="mt-3 w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Connect calendar
                </Button>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Calendar;
