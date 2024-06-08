import { useEffect, useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar';
import Card from './components/Card';


function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);

  // Fetch dog breeds from the API once when the component mounts
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breeds = Object.keys(data.message);
        setBreeds(breeds);
      } catch (error) {
        console.error('Error fetching dog breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const cardData = [
    { imageUrl: 'https://via.placeholder.com/300', breedName: 'John Doe' },
    { imageUrl: 'https://via.placeholder.com/300', breedName: 'Jane Smith' },
    { imageUrl: 'https://via.placeholder.com/300', breedName: 'Alice Johnson' },
    { imageUrl: 'https://via.placeholder.com/300', breedName: 'Chris Evans' },
    { imageUrl: 'https://via.placeholder.com/300', breedName: 'Sarah Connor' },
    { imageUrl: 'https://via.placeholder.com/300', breedName: 'Bruce Wayne' },
    // Add more card data as needed
  ];

  return (
    <>
      <div className='flex flex-col items-center justify-center p-10 gap-5'>
        <h1 className="text-3xl font-bold">Fetch Dog Breeds</h1>
        <SearchBar breeds={breeds} />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 p-6">
          {cardData.map((card, index) => (
            <Card key={index} imgUrl={"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} breedName={card.breedName} />
          ))}
      </div>  
    </>
  )
}

export default App
