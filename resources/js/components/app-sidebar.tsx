import { NavMain } from '@/components/nav-main';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { LayoutGrid, 
    Upload, 
    Paperclip, 
    Bell, 
    Calendar, 
    Send, 
    FileText, 
    Clock  } from 'lucide-react';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Upload',
        href: '/upload',
        icon: Upload,
    },
    {
        title: 'Attachment',
        href: '/attachments',
        icon: Paperclip,
    },
    {
        title: 'Notification',
        href: '/notifications',
        icon: Bell,
    },
    {
        title: 'Calendar',
        href: '/calendar',
        icon: Calendar,
    },
    {
        title: 'Send',
        href: '/send',
        icon: Send,
    },
    {
        title: 'Document',
        href: '/documents',
        icon: FileText,
    },
    {
        title: 'History',
        href: '/history',
        icon: Clock,
    },
];


export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                              logo
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>
        </Sidebar>
    );
}
