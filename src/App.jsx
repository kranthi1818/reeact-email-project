import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import Cards from './Components/Cards'

function App() {

  let initialState = { isFavourite: false, isRead: false, isUnread: false }

  const [data, setData] = useState([])
  const [emailBody, setEmailBody] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  let [filterType, setFilterType] = useState('all')

  function handleFavouriteClick(id) {
    let toggleFavourite = data.map((email) => (
      email.id === id ? { ...email, isFavourite: !email.isFavourite } : email
    ))
    setData(toggleFavourite)
  }



  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch("https://flipkart-email-mock.vercel.app/");
        const emailData = await response.json();

        let emailWithInitial = emailData.list.map(email => ({ ...email, ...initialState }))

        setData(emailWithInitial || []);

      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };
    fetchEmails();
  }, []);


  useEffect(() => {
    if (!selectedId) return;
    const fetchEmailBody = async () => {
      try {
        const response = await fetch(`https://flipkart-email-mock.vercel.app/?id=${selectedId}`);
        const emailData = await response.json();
        setEmailBody(emailData.body || "No content available.");

      } catch (error) {
        console.error("Error fetching email body:", error);
      }
    };
   

    fetchEmailBody();
  }, [selectedId]);


  useEffect(() => {

    setSelectedId(null);
    setEmailBody('');

  }, [filterType]);

  const filteredEmails = data.filter((email) => {
    if (filterType === 'read') return email.isRead;
    if (filterType === 'unread') return !email.isRead || selectedId === email.id; 
    if (filterType === 'favourites') return email.isFavourite;
    if (filterType === 'all') return email;  

    return true; 
  });
  
  const handleOpenEmail = (id) => {
    setData(prevData =>
        prevData.map(email =>
            email.id === id ? { ...email, isRead: true, isUnread: false } : email
        )
    );
    setSelectedId(id);
};



  return (
    <div>
      <NavBar setFilterType={setFilterType} filterType={filterType}/>

      <Cards emailBody={emailBody}
        data={filteredEmails}
        setSelectedId={setSelectedId}
        selectedId={selectedId}
        handleFavouriteClick={handleFavouriteClick}
        handleOpenEmail={handleOpenEmail} />
    </div>
  )
}

export default App

