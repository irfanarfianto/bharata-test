import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { type User } from '@/types';
import { Link, router } from '@inertiajs/react';
import { LogOut, Settings, Moon, Sun, Monitor } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useAppearance } from '@/hooks/use-appearance';

interface UserMenuContentProps {
    user: User;
}

export function UserMenuContent({ user }: UserMenuContentProps) {
    const cleanup = useMobileNavigation();
    const { appearance, updateAppearance } = useAppearance();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    // Pilih icon lucide sesuai mode
    let ThemeIcon = Moon;
    if (appearance === 'light') ThemeIcon = Sun;
    if (appearance === 'system') ThemeIcon = Monitor;

    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <UserInfo user={user} showEmail={true} />
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <Link className="block w-full" href={route('profile.edit')} as="button" prefetch onClick={cleanup}>
                        <Settings className="mr-2" />
                        Settings
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            {/* Theme Switch */}
            <DropdownMenuSeparator />
            <div className="px-2 pt-2 pb-2">
                <div className="flex items-center justify-between">
                    <span className="flex items-center text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                        <ThemeIcon className="mr-4 h-4 w-4" />
                        Dark Mode
                    </span>
                    <Switch
                        checked={appearance === "dark"}
                        onCheckedChange={v => updateAppearance(v ? "dark" : "light")}
                        aria-label="Toggle dark mode"
                    />
                </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <Link className="block w-full" method="post" href={route('logout')} as="button" onClick={handleLogout}>
                    <LogOut className="mr-2" />
                    Log out
                </Link>
            </DropdownMenuItem>
        </>
    );
}