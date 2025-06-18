import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

import SystemAlert from "@/components/dashboard/system-alert";
import EventCalender from "@/components/dashboard/event-calendar";
import FileList from "@/components/dashboard/file-list";
import DashboardCircularStats from '@/components/dashboard/circular-task';
import ArchiveAndGaugeCards from '@/components/dashboard/archive-gauge';
import DashboardAreaChartSection from '@/components/dashboard/dash-chart';
import DashboardChartBar from '@/components/dashboard/dash-chart-bar';
import DashboardPieChartSection from '@/components/dashboard/dash-chart-pie';
import CreateTaskCard from '@/components/dashboard/create-task';
import ChatPanel from '@/components/dashboard/chat-panel';
import RatedTaskCard from '@/components/dashboard/rate-card';
type BreadcrumbItem = {
  title: string;
  href: string;
};

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
];

export default function Dashboard() {
  return (
    <>
      <Head title="Dashboard" />
      <AppLayout breadcrumbs={breadcrumbs}>
        <div className="flex flex-col md:flex-row gap-4 rounded-xl p-4 items-start">
          {/* Kiri */}
          <div className="flex flex-col gap-4 flex-[2] min-w-0 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DashboardAreaChartSection />
                <DashboardChartBar />
            </div>
            <SystemAlert />
            <EventCalender />
            <FileList />
            <DashboardCircularStats />
            <ArchiveAndGaugeCards />
          </div>
          {/* Kanan */}
          <div className="flex flex-col gap-4 flex-[1.1] min-w-0 w-full md:max-w-[400px]">
          <DashboardPieChartSection />
          <CreateTaskCard />
          <ChatPanel />
          <RatedTaskCard />
          </div>
        </div>
      </AppLayout>
    </>
  );
}