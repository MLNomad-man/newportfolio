"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Increment view count
        const { data, error } = await supabase.rpc('increment_page_views');
        
        if (error) {
          // If the RPC function doesn't exist, fall back to direct query
          const { data: viewData, error: viewError } = await supabase
            .from('page_views')
            .select('count')
            .eq('page', 'home')
            .single();
          
          if (viewError) {
            console.error("Visitor counter error:", viewError);
            return;
          }
          
          setCount(viewData?.count || 0);
          
          // Try to increment
          await supabase
            .from('page_views')
            .update({ count: (viewData?.count || 0) + 1 })
            .eq('page', 'home');
        } else {
          setCount(data);
        }
      } catch (err) {
        console.error("Visitor counter error:", err);
      }
    };

    trackVisit();
  }, []);

  return (
    <div className="flex items-center gap-2 text-slate-500 text-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span>{count !== null ? `${count.toLocaleString()} visitors` : "..."}</span>
    </div>
  );
}
