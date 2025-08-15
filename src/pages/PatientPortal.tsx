import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Stethoscope, FileText, Pill, Activity } from 'lucide-react';

export default function PatientPortal() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Patient Portal</h1>
          <p className="mt-1 text-sm text-gray-500">Secure access to your medical records and appointments</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Upcoming Appointments */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <CardTitle>Upcoming Appointments</CardTitle>
                </div>
                <CardDescription>View and manage your scheduled visits</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">No upcoming appointments</p>
                <Button className="w-full">
                  <Calendar className="mr-2 h-4 w-4" /> Schedule Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Medical Records */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-green-600" />
                  <CardTitle>Medical Records</CardTitle>
                </div>
                <CardDescription>Access your health information</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center">✓ Latest lab results</li>
                  <li className="flex items-center">✓ Visit summaries</li>
                  <li className="flex items-center">✓ Immunization records</li>
                </ul>
                <Button variant="outline" className="w-full">
                  View All Records
                </Button>
              </CardContent>
            </Card>

            {/* Prescriptions */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Pill className="h-6 w-6 text-purple-600" />
                  <CardTitle>Prescriptions</CardTitle>
                </div>
                <CardDescription>Manage your medications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">No active prescriptions</p>
                <Button variant="outline" className="w-full">
                  Request Refill
                </Button>
              </CardContent>
            </Card>

            {/* Health Summary */}
            <Card className="hover:shadow-lg transition-shadow duration-200 md:col-span-2">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Activity className="h-6 w-6 text-amber-600" />
                  <CardTitle>Health Summary</CardTitle>
                </div>
                <CardDescription>Your recent health metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Last Visit</p>
                    <p className="font-medium">June 15, 2023</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Blood Pressure</p>
                    <p className="font-medium">120/80 mmHg</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Find a Doctor
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Records
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Test
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Health Haven. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
