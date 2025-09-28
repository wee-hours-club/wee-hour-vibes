import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/providers/ThemeProvider';
import clarity from '@microsoft/clarity';
import { useEffect } from 'react';
import Index from './pages/Index';
import ForUsers from './pages/ForUsers';
import ForHosts from './pages/ForHosts';
import About from './pages/About';
import Safety from './pages/Safety';
import NotFound from './pages/NotFound';
import FloatingActions from './components/FloatingActions';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    clarity.init('thsa3lwh9i');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='light'>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/join' element={<ForUsers />} />
              <Route path='/host' element={<ForHosts />} />
              <Route path='/about' element={<About />} />
              <Route path='/safety' element={<Safety />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path='*' element={<NotFound />} />
            </Routes>
            <FloatingActions />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
