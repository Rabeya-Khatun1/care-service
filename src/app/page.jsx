// app/page.tsx
import { 
  Heart, 
  Users, 
  Home, 
  Star, 
  Quote, 
  Shield, 
  Clock, 
  Phone,
  Calendar,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import About from './about/page';
import Service from './service/page';
import Banner from './layout/Banner';
import Testimonials from './testimonials/page';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Banner/Hero Section with Care Motivation */}
  <Banner></Banner>

<About></About>

<Service></Service>

      {/* Testimonials Section */}
  <Testimonials></Testimonials>
 
    </main>
  );
}