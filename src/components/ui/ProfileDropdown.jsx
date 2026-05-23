'use client'
import { Avatar, Dropdown, Label } from "@heroui/react";
import { FaArrowUpRightFromSquare, FaGear } from "react-icons/fa6";
import { FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useAuthActions } from "@/hooks/authActions";

export function ProfileDropdown() {

    const [theme, setTheme] = useState('light');
    const { data: session } = useSession();
    const { logoutAndRedirect } = useAuthActions();



    return (
        <Dropdown>
            <Dropdown.Trigger className="rounded-full">
                <Avatar>
                    <Avatar.Image
                        alt={session?.user?.name || "User Icon"}
                        src={session?.user?.image || ""}
                    />
                    <Avatar.Fallback delayMs={600}>{session?.user?.email ? session.user.email.charAt(0).toUpperCase() : "😊"}</Avatar.Fallback>
                </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                        <Avatar size="sm">
                            <Avatar.Image
                                alt={session?.user?.name || "User Icon"}
                                src={session?.user?.image || ""}
                            />
                            <Avatar.Fallback delayMs={600}>{session?.user?.email ? session.user.email.charAt(0).toUpperCase() : "😊"}</Avatar.Fallback>
                        </Avatar>
                        <div className="flex flex-col gap-0">
                            <p className="font-medium text-sm leading-5">{session?.user?.name || "User"}</p>
                            <p className="text-text-secondary text-xs leading-none">{session?.user?.email || "user@example.com"}</p>
                        </div>
                    </div>
                </div>
                <Dropdown.Menu>
                    {/* <Dropdown.Item id="dashboard" textValue="Dashboard">
                        <Label>Dashboard</Label>
                    </Dropdown.Item> */}
                    <Dropdown.Item id="profile" textValue="Profile">
                        <Link href="/profile">
                            <Label>Profile</Label>
                        </Link>
                    </Dropdown.Item>

                    <Dropdown.Item id="theme" textValue="Theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        <div className="flex justify-between items-center gap-2 w-full">
                            <Label>Change Theme</Label>
                            {
                                theme === 'dark' ? <FiMoon size={14} className="text-text-secondary" /> : <FiSun size={14} className="text-text-secondary" />
                            }
                        </div>
                    </Dropdown.Item>

                    {/* <Dropdown.Item id="settings" textValue="Settings">
                        <div className="flex justify-between items-center gap-2 w-full">
                            <Label>Settings</Label>
                            <FaGear className="size-3.5 text-text-secondary" />
                        </div>
                    </Dropdown.Item> */}

                    <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                        <div className="flex justify-between items-center gap-2 w-full" onClick={() => {
                            logoutAndRedirect();
                        }}>
                            <Label>Log Out</Label>
                            <FaArrowUpRightFromSquare className="size-3.5 text-danger" />
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}