import { SidebarTrigger } from '@/components/ui/sidebar';
import  HeaderSearch  from '@/components/header-search';
import  HeaderMenu from '@/components/header-menu';
import { NavUser } from '@/components/nav-user';
export function AppSidebarHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex w-full  items-center">
                <div className="flex flex-1 items-center gap-0 md:gap-7">
                    <SidebarTrigger className="ml-1 block md:hidden" />
                    <HeaderSearch />
                    <HeaderMenu/>
                </div>
                <div className="ml-auto">
                    <NavUser />
                </div>
            </div>
        </header>
    );
}
