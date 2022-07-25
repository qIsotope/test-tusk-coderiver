import { FaChartPie } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaTicketAlt } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { FaAward } from 'react-icons/fa';

export const sidebarItems = [
	{ label: 'Overview', icon: <FaChartPie /> },
	{ label: 'Users', icon: <FaTicketAlt /> },
	{ label: 'Ideas', icon: <FaLightbulb /> },
	{ label: 'Contacts', icon: <FaUsers /> },
	{ label: 'Agents', icon: <FaUserTie /> },
	{ label: 'Articles', icon: <FaBook /> },
	{ label: 'Settings', icon: <FaCog /> },
	{ label: 'Subscription', icon: <FaAward /> },
]