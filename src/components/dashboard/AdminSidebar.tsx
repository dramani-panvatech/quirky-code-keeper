
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Settings,
  LayoutDashboard,
  UserCheck,
  Clock,
  Package,
  CreditCard,
  HelpCircle,
  User
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
    { title: 'Customers', url: '/dashboard/customers', icon: Users },
    { title: 'Provider', url: '/dashboard/provider', icon: UserCheck },
    { title: 'Calendar', url: '/dashboard/calendar', icon: Calendar },
    { title: 'Services', url: '/dashboard/services', icon: Package },
    { title: 'Payment', url: '/dashboard/payment', icon: CreditCard },
    { title: 'Settings', url: '/dashboard/settings', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className="w-64 border-r border-slate-200 bg-white shadow-sm">
      <SidebarHeader className="px-6 py-6 border-b border-slate-100">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">FlowTime</h1>
            <p className="text-xs text-slate-500 font-medium">Admin Dashboard</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `group flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200 shadow-sm'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:shadow-sm'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <item.icon 
                            className={`h-5 w-5 transition-colors duration-200 ${
                              isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                            }`}
                          />
                          <span className="font-medium">{item.title}</span>
                          {isActive && (
                            <div className="ml-auto h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-4 py-6 border-t border-slate-100 bg-slate-50/50">
        <div className="space-y-2">
          <NavLink
            to="/dashboard/help"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-green-50 to-green-100 text-green-700 border border-green-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm'
              }`
            }
          >
            <HelpCircle className="h-5 w-5" />
            <span>Help & Support</span>
          </NavLink>
          
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 border border-purple-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm'
              }`
            }
          >
            <div className="h-6 w-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="h-3 w-3 text-white" />
            </div>
            <span>Your Profile</span>
          </NavLink>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
