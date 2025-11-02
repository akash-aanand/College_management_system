// src/data.js

// Mock data for Hostel Residents (hostelmangment.jpg)
export const mockHostelResidents = [
  {
    id: 1,
    name: 'Priya Sharma',
    studentId: 'CS2023045',
    img: 'https://placehold.co/100x100/E2E8F0/4A5568?text=Priya',
    department: 'Computer Science',
    year: '2nd Year',
    room: 'B-201',
  },
  {
    id: 2,
    name: 'Rohan Verma',
    studentId: 'ME2022101',
    img: 'https://placehold.co/100x100/E2E8F0/4A5568?text=Rohan',
    department: 'Mechanical',
    year: '3rd Year',
    room: 'A-310',
  },
  {
    id: 3,
    name: 'Anjali Singh',
    studentId: 'EC2023088',
    img: 'https://placehold.co/100x100/E2E8F0/4A5568?text=Anjali',
    department: 'Electronics',
    year: '2nd Year',
    room: 'C-105',
  },
  {
    id: 4,
    name: 'Vikram Patel',
    studentId: 'CE2021032',
    img: 'https://placehold.co/100x100/E2E8F0/4A5568?text=Vikram',
    department: 'Civil',
    year: '4th Year',
    room: 'B-401',
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    studentId: 'CS2022015',
    img: 'https://placehold.co/100x100/E2E8F0/4A5568?text=Sneha',
    department: 'Computer Science',
    year: '3rd Year',
    room: 'D-212',
  },
  {
    id: 6,
    name: 'Amit Kumar',
    studentId: 'EE2021056',
    img: 'https://placehold.co/100x100/E2E8F0/4A5568?text=Amit',
    department: 'Electrical',
    year: '4th Year',
    room: 'A-115',
  },
];

// Mock data for Room Allocation (main_dashboard_layout_completed.png)
export const mockRoomAllocation = [
  {
    id: 1,
    roomNo: 'A-201',
    block: 'Block Alpha',
    checkIn: 'Jan 5, 2024',
    status: 'Occupied',
  },
  {
    id: 2,
    roomNo: 'C-112',
    block: 'Block Charlie',
    checkIn: 'Jan 8, 2024',
    status: 'Occupied',
  },
  {
    id: 3,
    roomNo: 'B-305',
    block: 'Block Beta',
    checkIn: 'Jan 12, 2024',
    status: 'Checked Out',
  },
  {
    id: 4,
    roomNo: 'A-108',
    block: 'Block Alpha',
    checkIn: 'Jan 15, 2024',
    status: 'Occupied',
  },
];

// Mock data for Mess Management Bills (mess_management_-_bill_cards_2_completed.png)
export const mockMessBills = [
  {
    id: 1,
    month: 'OCT 2024',
    name: 'Priya Sharma',
    studentId: '21BCE1234',
    room: 'B-402',
    amount: '4,500.00',
    status: 'Paid',
    paidOn: '15 Oct 2024',
    dueDate: null,
  },
  {
    id: 2,
    month: 'OCT 2024',
    name: 'Rohan Verma',
    studentId: '22BME5678',
    room: 'C-112',
    amount: '4,500.00',
    status: 'Overdue',
    paidOn: null,
    dueDate: '25 Oct 2024',
  },
  {
    id: 3,
    month: 'NOV 2024',
    name: 'Ananya Singh',
    studentId: '21BCE9876',
    room: 'A-210',
    amount: '4,500.00',
    status: 'Unpaid',
    paidOn: null,
    dueDate: '25 Nov 2024',
  },
  {
    id: 4,
    month: 'OCT 2024',
    name: 'Vikram Rathore',
    studentId: '23BEE4321',
    room: 'D-301',
    amount: '4,500.00',
    status: 'Paid',
    paidOn: '20 Oct 2024',
    dueDate: null,
  },
  {
    id: 5,
    month: 'NOV 2024',
    name: 'Sameer Khan',
    studentId: '22BCE1122',
    room: 'B-105',
    amount: '5,000.00',
    status: 'Unpaid',
    paidOn: null,
    dueDate: '25 Nov 2024',
  },
  {
    id: 6,
    month: 'SEP 2024',
    name: 'Isha Gupta',
    studentId: '20BME3456',
    room: 'C-404',
    amount: '4,500.00',
    status: 'Paid',
    paidOn: '18 Sep 2024',
    dueDate: null,
  },
];

// Mock data for Library Dashboard (library_dashboard.png)
export const mockOverdueBooks = [
  {
    id: 1,
    title: 'The Design of Everyday Things',
    borrower: 'Olivia Chen',
    dueDate: 'Oct 15, 2023',
    fine: '$4.50',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    borrower: 'Benjamin Carter',
    dueDate: 'Oct 12, 2023',
    fine: '$6.00',
  },
  {
    id: 3,
    title: 'A Brief History of Humankind',
    borrower: 'Sophia Rodriguez',
    dueDate: 'Oct 10, 2023',
    fine: '$7.50',
  },
];

export const mockRecentlyIssuedBooks = [
  {
    id: 1,
    title: 'Thinking, Fast and Slow',
    borrower: 'Liam Goldberg',
    issueDate: 'Nov 01, 2023',
    returnDate: 'Nov 15, 2023',
  },
  {
    id: 2,
    title: 'Project Hail Mary',
    borrower: 'Ava Nguyen',
    issueDate: 'Oct 30, 2023',
    returnDate: 'Nov 13, 2023',
  },
  {
    id: 3,
    title: 'Dune',
    borrower: 'Noah Patel',
    issueDate: 'Oct 28, 2023',
    returnDate: 'Nov 11, 2023',
  },
];

// Mock data for Event Management (event_management_dashboard_2.jpg)
export const mockEvents = [
  {
    id: 1,
    title: 'Annual Tech Symposium',
    date: 'Oct 25, 2024 @ 9:00 AM',
    img: 'https://placehold.co/600x400/6366F1/FFFFFF?text=Tech+Symposium',
    registered: 150,
    raised: '2,500',
  },
  {
    id: 2,
    title: 'Fall Music Fest',
    date: 'Nov 12, 2024 @ 4:00 PM',
    img: 'https://placehold.co/600x400/EC4899/FFFFFF?text=Music+Fest',
    registered: 480,
    raised: '8,200',
  },
  {
    id: 3,
    title: 'Career & Internship Fair',
    date: 'Dec 02, 2024 @ 10:00 AM',
    img: 'https://placehold.co/600x400/10B981/FFFFFF?text=Career+Fair',
    registered: 88,
    raised: '500',
  },
];

// Mock data for Warden Dashboard (wardendashboard.png)
export const mockRecentActivity = [
  {
    id: 1,
    name: 'Liam Johnson',
    room: 'A-203',
    date: 'Oct 26, 2023',
    status: 'Checked-in',
  },
  {
    id: 2,
    name: 'Olivia Smith',
    room: 'B-101',
    date: 'Oct 26, 2023',
    status: 'Checked-out',
  },
  {
    id: 3,
    name: 'Noah Williams',
    room: 'C-305',
    date: 'Oct 25, 2023',
    status: 'Checked-in',
  },
];

// Mock data for Fee Management (administration_-_fee_cards.png)
export const mockFeeData = [
  {
    id: 1,
    name: 'Eleanor Pena',
    studentId: '#STU84321',
    img: 'https://placehold.co/100x100/E2E8F0/4A5568?text=EP',
    amount: '2,500.00',
    dueDate: '25 Aug 2024',
    paidOn: '20 Aug 2024',
    status: 'Paid',
  },
  {
    id: 2,
    name: 'Cody Fisher',
    studentId: '#STU98765',
    img: 'https://placehold.co/100x100/E2E8F0/4A5568?text=CF',
    amount: '2,500.00',
    dueDate: '25 Aug 2024',
    paidOn: null,
    status: 'Unpaid',
  },
  {
    id: 3,
    name: 'Jane Cooper',
    studentId: '#STU12345',
    img: 'https://placehold.co/100x100/E2E8F0/4A5568?text=JC',
    amount: '1,800.00',
    dueDate: '15 Jul 2024',
    paidOn: null,
    status: 'Overdue',
  },
  {
    id: 4,
    name: 'Robert Fox',
    studentId: '#STU67890',
    img: 'https://placehold.co/100x100/E2E8F0/4A5568?text=RF',
    amount: '3,200.00',
    dueDate: '01 Sep 2024',
    paidOn: '28 Aug 2024',
    status: 'Paid',
  },
];

