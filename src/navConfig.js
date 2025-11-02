import {
  LayoutDashboard,
  Users,
  Building,
  Bed,
  ListChecks,
  Utensils,
  Library,
  CalendarDays,
  FileText,
  CreditCard,
  Megaphone,
  User,
  BookUser,
  School,
  FileStack,
} from 'lucide-react';

/**
 * Navigation Configuration
 * Defines sidebar links for each user role.
 *
 * Each item needs:
 * - id: A unique string (used as a key and for navigation)
 * - name: The text displayed in the sidebar
 * - icon: A component (from lucide-react)
 */
const navConfig = {
  // Administrator Role
  administrator: [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'students', name: 'Students', icon: Users },
    { id: 'faculty', name: 'Faculty', icon: User },
    { id: 'departments', name: 'Departments', icon: School },
    { id: 'fee-management', name: 'Fee Management', icon: CreditCard },
    { id: 'hostel-allocation', name: 'Hostel Allocation', icon: Bed },
    { id: 'mess-management', name: 'Mess Management', icon: Utensils },
    { id: 'library-management', name: 'Library', icon: Library },
    { id: 'event-management', name: 'Event Management', icon: CalendarDays },
    { id: 'new-announcement', name: 'New Announcement', icon: Megaphone, highlight: true },
    { id: 'reports', name: 'Reports', icon: FileText },
  ],

  // Warden Role
  warden: [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'student-records', name: 'Student Records', icon: Users },
    { id: 'room-management', name: 'Room Management', icon: Bed },
    { id: 'mess-menu', name: 'Mess Menu', icon: Utensils },
    { id: 'notices', name: 'Notices', icon: Megaphone },
    { id: 'reports', name: 'Reports', icon: FileText },
  ],
  
  // Student Role
  student: [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'my-profile', name: 'My Profile', icon: User },
    { id: 'mess-bill', name: 'Mess Bill', icon: CreditCard },
    { id: 'library', name: 'Library', icon: Library },
    { id: 'events', name: 'Events', icon: CalendarDays },
    { id: 'course-materials', name: 'Course Materials', icon: FileStack },
  ],

  // Faculty Role
  faculty: [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'my-profile', name: 'My Profile', icon: User },
    { id: 'students', name: 'Students', icon: Users },
    { id: 'courses', name: 'My Courses', icon: BookUser },
    { id: 'library', name: 'Library', icon: Library },
    { id: 'events', name: 'Events', icon: CalendarDays },
  ],
};

export default navConfig;

