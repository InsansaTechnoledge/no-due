import React, { useEffect, useState, useMemo } from 'react';
import PageHeaders from '../../utils/AfterAuthUtils/PageHeaders';
import { CustomerNames } from '../../utils/constants';
import CustomerDetailCard from '../../Components/AfterAuthComponent/ReminderHistoryPage/CustomerDetailCard';
import MobileCustomerDetailCard from '../../Components/AfterAuthComponent/ReminderHistoryPage/MobileCustomerDetailCard';
import LeftSide from '../../Components/AfterAuthComponent/ReminderHistoryPage/DetailedView/LeftSide';
import RightSide from '../../Components/AfterAuthComponent/ReminderHistoryPage/DetailedView/RightSide';
import NoDataFallbackPage from '../../Components/AfterAuthComponent/ReminderHistoryPage/NoDataFallbackPage';
import LoadingPage from '../../Components/AfterAuthComponent/ReminderHistoryPage/LoadingPage';

const ReminderHistory = () => {
  const [loading, setLoading] = useState(true);
  const [detailedView, setDetailedView] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [rotateDeg, setRotateDeg] = useState(6);
  const [direction, setDirection] = useState(-1);

  useEffect(() => {
    const interval = setTimeout(() => {
      setRotateDeg((prev) => prev + direction * 6);
      setDirection((prev) => -prev);
    }, 500); 

    return () => clearTimeout(interval);
  }, [direction]);

  const sampleReminders = useMemo(
    () => [
      { id: 1, date: '2025-10-01', channel: 'WhatsApp', status: 'Delivered' },
      { id: 2, date: '2025-10-05', channel: 'Voice', status: 'Answered' },
      { id: 3, date: '2025-10-10', channel: 'WhatsApp', status: 'Seen' },
      { id: 4, date: '2025-10-14', channel: 'SMS', status: 'Sent' },
    ],
    []
  );

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const imgFor = (c) =>
    c.gender === 'male'
      ? 'https://img.freepik.com/free-vector/smiling-man-with-glasses_1308-174409.jpg'
      : 'https://img.freepik.com/free-vector/smiling-woman-with-long-brown-hair_1308-175662.jpg';

  const openDetails = (customer) => {
    setSelectedCustomer(customer);
    setDetailedView(true);
  };

  if (loading) {
    return (
      <LoadingPage/>
    );
  }

  if (!CustomerNames || CustomerNames.length === 0) {
    return (
     <NoDataFallbackPage rotateDeg={rotateDeg}/>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <PageHeaders
        header={'Reminder History'}
        subheader={'Track all your past reminders in one place'}
      />

      {/* DESKTOP / TABLET */}
      {detailedView ? (
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* LEFT: LIST */}
          <LeftSide 
            CustomerNames={CustomerNames} 
            selectedCustomer={selectedCustomer} 
            setSelectedCustomer={setSelectedCustomer} 
            imgFor={imgFor} 
          />

          {/* RIGHT: DETAIL */}
         <RightSide 
          setDetailedView={setDetailedView} 
          setSelectedCustomer={setSelectedCustomer} 
          imgFor={imgFor} 
          selectedCustomer={selectedCustomer} 
          sampleReminders={sampleReminders}
        />
        </div>
      ) : (
        // CARD GRID FOR LAPTOP
       <CustomerDetailCard 
        CustomerNames={CustomerNames} 
        imgFor={imgFor} 
        openDetails={openDetails}
       />
      )}

      {/* MOBILE VIEW */}
      <MobileCustomerDetailCard 
        CustomerNames={CustomerNames} 
        imgFor={imgFor} 
        openDetails={openDetails} 
        setDetailedView={setDetailedView}  
        setSelectedCustomer={setSelectedCustomer} 
        selectedCustomer={selectedCustomer} 
        detailedView={detailedView} 
        sampleReminders={sampleReminders}
      />

    </div>
  );
};

export default ReminderHistory;