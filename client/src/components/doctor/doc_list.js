import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Doctors_List = ({ cart, setCart }) => {
  // Sample data (replace this with your actual data)
  const initialMedicines = [
    {
      id: 1,
      name: 'Dermatology Specialist',
      cost: "Dr. Jay D",
      description: 'In practice for 5 years',
      image: 'data:image/jpeg;base64,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',
      added:'no',
    },
    {
      id: 2,
      name: 'Orthopedic Specialist',
      cost: "Dr. Amit Santosh",
      description: 'In practice for 10 years',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxB2mdI24ah2QPzrq4FOETJAcScFWWA8B-R-8LN9orKNLfRzfLB6IOykAaw&s',
      added:'no',
    },
    {
      id: 3,
      name: 'Dentist',
      cost: "Dr. Sudha Mukharjee",
      description: 'In practice for 15 years',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcHsyAWlxqpVvaDeoId5EbCX9qE_9hEtEkrUP5ajx1vY9LsLZt4X6230s7g&s',
      added:'no',
    },
    {
        id: 4,
        name: 'Pediatrician',
        cost: "Dr. Rama Sarda",
        description: 'In practice for 15 years',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1irXBs4-_JI3FGBsihNaC2x5XWw1ikdgLd2rkNwwVkABcYAbo7gU21Qjlp9XA6HxCF6E&usqp=CAU',
        added:'no',},
      {
        id: 5,
        name: 'Dr. Saranya Shetty',
        cost: "Gynaecology",
        description: 'In practice for 2 years',
        image: 'data:image/jpeg;base64,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',
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

  const addToCart = (medicine) => {
    const updatedMedicines = medicines.map((med) =>
      med.id === medicine.id ? { ...med, added: 'yes' } : med
    );
    setMedicines(updatedMedicines);

    const updatedCart = [...cart, { ...medicine, quantity: 1 }];
    setCart(updatedCart);
    alert("Successfully added to the cart!");
  };
 
  return (
    <>
      
      <div className="medicines-container">
        <input
          type="text"
          placeholder="Search Doctors"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />

        <div className="medicines-list">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="medicine-card">
              <img src={medicine.image} alt={medicine.name} className="medicine-image" height={250} width={250}/>
              <h3>{medicine.name}</h3>
              <p className="cost"> {medicine.cost}</p>
              <p className="description">{medicine.description}</p>
              {/* <button onClick={() => addToCart(medicine)}>Add to Cart</button> */}
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors_List;