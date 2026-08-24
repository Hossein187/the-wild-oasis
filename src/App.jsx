import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GlobalStyles from './styles/GlobalStyles.js';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout.jsx';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerClassName=""
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;

// import styled from 'styled-components';
// import GlobalStyles from './styles/GlobalStyles.js';
// import Button from './ui/Button.jsx';
// import Input from './ui/Input.jsx';
// import Title from './ui/Heading.jsx';
// import Row from './ui/Row.jsx';

// const StyledApp = styled.div`
//   background-color: var(--color-grey-100);
//   min-height: 100vh;
//   padding: 2rem;
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <StyledApp>
//         <Row type="horizontal">
//           <Title as="h1">The Wild Oasis</Title>
//           <div>
//             <Title as="h2">Check in and out</Title>
//             <Button
//               variation="primary"
//               size="medium"
//               onClick={() => alert('Get Started clicked')}>
//               Check in
//             </Button>
//             <Button
//               variation="secondary"
//               size="small"
//               onClick={() => alert('Get Started clicked')}>
//               Check out
//             </Button>
//           </div>
//         </Row>
//         <Row type="vertical">
//           <Title as="h3">Form</Title>
//           <form action="">
//             <Input type="number" placeholder="Number of Guests" />
//             <Input type="number" placeholder="Number of Guests" />
//           </form>
//         </Row>
//       </StyledApp>
//     </>
//   );
// }

// export default App;
