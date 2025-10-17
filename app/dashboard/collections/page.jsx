'use client';
import { useState } from 'react';
import CollectionsOverview from '@/components/CollectionsOverview';
import { motion } from 'framer-motion';

import { usePathname } from 'next/navigation';

export default function CollectionsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#f7f5f3]">
      {/* Sidebar here... (your existing Mirah sidebar code) */}

      <div className="flex-1 p-8">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl font-bold text-[#4a4a4a] mb-6"
        >
          Collections
        </motion.h2>

        {/* This will render the collection overview */}
        <CollectionsOverview />
      </div>
    </div>
  );
}
