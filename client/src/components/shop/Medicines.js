import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Medicines = ({ cart, setCart }) => {
  
  const initialMedicines = [
    {
      id: 1,
      name: 'Azithromycin',
      cost: 109,
      description: 'Azithromycin is used to treat certain bacterial infections, such as bronchitis,pneumonia and infections of the ears, lungs, sinuses, skin, throat, and reproductive organs.',
      image: 'https://www.krishlarpharma.com/wp-content/uploads/2019/12/KRITHRO-500-tablet.jpg',
      added:'no',
    },
    {
      id: 2,
      name: 'Dolo 650',
      cost: 155,
      description: 'Dolo-650 tablet is a very common medicine and often prescribed alone or with one or two medicine to relieve symptoms of fever, nerve pain, and pain during periods, backache, toothache.',
      image: 'https://m.media-amazon.com/images/I/91bz6RZlHZL.jpg',
      added:'no',
    },
    {
      id: 3,
      name: 'Diclofenac',
      cost: 210,
      description: 'Diclofenac is a medicine that reduces swelling (inflammation) and pain. Its used to treat aches and pains, and problems with joints, muscles and bones. These include: rheumatoid arthritis,osteoarthritis.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/321784944/WV/JD/CT/191733420/reactin-diclofenac-sodium-tablet.jpg',
      added:'no',
    },
    {
        id: 4,
        name: 'Cheston cold',
        cost: 150,
        description: 'Cheston Cold Total Tablet is a combination medicine that effectively relieves symptoms of common cold such as blocked nose, runny nose, watery eyes, sneezing, and congestion or stuffiness.',
        image: 'https://core.mymedicalshop.com/media/products/E3A5C5Cproduct5C5Cc5C5Ch5C5Ccheston_cold_tablet_10s-imresizer_bb0ee754.jpeg',
        added:'no',},
      {
        id: 5,
        name: 'Combiflam',
        cost: 120,
        description: 'Combiflam tablet is a pain-relieving medicine. This is used to relieve headaches, toothache, body aches, muscle pain, and joint pain and to reduce fever. Take this medicine as recommended by your doctor, preferably after meals.',
        image: 'https://cdn01.pharmeasy.in/dam/products_otc/I38223/combiflam-plus-headache-relief-tablet-strip-of-10-tablets-1-1669710901.jpg',
        added:'no',
      },
      
  ];

  const [medicines, setMedicines] = useState(initialMedicines);
  const [searchTerm, setSearchTerm] = useState('');
 

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredMedicines = initialMedicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(searchTerm)
    );

    setMedicines(filteredMedicines);
  };
  const navigate = useNavigate();
  const [notification, setNotification] = useState('');
  const addToCart = (medicine) => {
    const updatedMedicines = medicines.map((med) =>
      med.id === medicine.id ? { ...med, added: 'yes' } : med
    );
    setMedicines(updatedMedicines);

    const updatedCart = [...cart, { ...medicine, quantity: 1 }];
    setCart(updatedCart);
    setNotification(`${medicine.name} has been added to the cart!`);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };
  const goToCart = () => {
    navigate('/Cart'); 
  };
  return (
    <>
      
      {notification && (
        <div className="notification">
          <p>{notification}</p>
        </div>
      )}
      <div className="medicines-container">
      <div className="search-and-cart">
        <input
          type="text"
          placeholder="Search medicines by name"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
         <button onClick={goToCart}>Go to Cart</button>
</div>
        <div className="medicines-list">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="medicine-card">
              <img src={medicine.image} alt={medicine.name} className="medicine-image" height={250} width={250}/>
              <h3>{medicine.name}</h3>
              <p className="cost">Cost: {medicine.cost.toFixed(2)}</p>
              <p className="description">{medicine.description}</p>
              <button onClick={() => addToCart(medicine)}>Add to Cart</button>
              
            </div>
          ))}
        </div>
      </div>
      
    
    </>
  );
};

export default Medicines;