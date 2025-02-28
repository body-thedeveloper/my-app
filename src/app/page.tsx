import { Toaster } from "../app/components/ui/toaster";
import { Toaster as Sonner } from "../app/components/ui/sonner";
import { TooltipProvider } from "../app/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
  );

}
