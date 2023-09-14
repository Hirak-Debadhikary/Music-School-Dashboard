import React, { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Chocolate 1",
    price: 2.5,
    imageSrc:
      "https://p4.wallpaperbetter.com/wallpaper/206/987/812/chocolate-nuts-chips-cocoa-hd-wallpaper-preview.jpg",
  },
  {
    id: 2,
    name: "Chocolate 2",
    price: 3.0,
    imageSrc:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY29sYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Chocolate 3",
    price: 2.75,
    imageSrc:
      "https://images.unsplash.com/photo-1623000850264-08be785877bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  },
  {
    id: 4,
    name: "Chocolate 4",
    price: 2.25,
    imageSrc:
      "https://images.unsplash.com/photo-1545015451-f05567aa6bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 5,
    name: "Chocolate 5",
    price: 3.5,
    imageSrc:
      "https://images.unsplash.com/photo-1571091799989-e88304d6aed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 6,
    name: "Chocolate 6",
    price: 2.0,
    imageSrc:
      "https://images.unsplash.com/photo-1481391032119-d89fee407e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 7,
    name: "Chocolate 7",
    price: 2.95,
    imageSrc:
      "https://images.unsplash.com/photo-1589385973461-eaa9b0ae2830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 8,
    name: "Chocolate 8",
    price: 3.2,
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1673138930194-7c0450505a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 9,
    name: "Chocolate 9",
    price: 2.45,
    imageSrc:
      "https://images.unsplash.com/photo-1504855101244-34edfbd4b861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 10,
    name: "Chocolate 10",
    price: 3.8,
    imageSrc:
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 11,
    name: "Chocolate 11",
    price: 2.15,
    imageSrc:
      "https://images.unsplash.com/photo-1635491201370-1abd16f0cde0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 12,
    name: "Chocolate 12",
    price: 3.1,
    imageSrc:
      "https://images.unsplash.com/photo-1606188074044-fcd750f6996a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 13,
    name: "Chocolate 13",
    price: 2.6,
    imageSrc:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 14,
    name: "Chocolate 14",
    price: 3.5,
    imageSrc:
      "https://images.unsplash.com/photo-1545396635-f4865ca1448b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 15,
    name: "Chocolate 15",
    price: 2.75,
    imageSrc:
      "https://images.unsplash.com/photo-1589750580009-f80d7f626c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 16,
    name: "Chocolate 16",
    price: 2.95,
    imageSrc:
      "https://images.unsplash.com/photo-1582042837973-a13faf7e0eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 17,
    name: "Chocolate 17",
    price: 2.25,
    imageSrc:
      "https://images.unsplash.com/photo-1523035274455-b2e5c6d5c2e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 18,
    name: "Chocolate 18",
    price: 3.2,
    imageSrc:
      "https://images.unsplash.com/photo-1612799897476-e6e6e663f337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 19,
    name: "Chocolate 19",
    price: 2.45,
    imageSrc:
      "https://images.unsplash.com/photo-1606312618685-7cc798d5a2d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxjaG9jb2xhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 20,
    name: "Chocolate 20",
    price: 3.8,
    imageSrc:
      "https://images.unsplash.com/photo-1621424093521-eec9a43df158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxjaG9jb2xhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=60",
  },
];

export default function ProductList() {
  //   const [selectedChocolates, setSelectedChocolates] = useState([]);
  const maxChocolates = 8;

  // Function to load selected chocolates from localStorage
  const loadSelectedChocolates = () => {
    const selectedChocolatesString = localStorage.getItem("selectedChocolates");
    return selectedChocolatesString ? JSON.parse(selectedChocolatesString) : [];
  };

  // Initialize state with selected chocolates from localStorage or an empty array
  const [selectedChocolates, setSelectedChocolates] = useState(() => {
    const loadedChocolates = loadSelectedChocolates();
    return loadedChocolates.length > 0 ? loadedChocolates : [];
  });

  // Calculate the total price based on the selected chocolates
  const totalPrice = selectedChocolates.reduce(
    (total, chocolate) => total + chocolate.price,
    0
  );

  // Function to save selected chocolates to localStorage
  const saveSelectedChocolates = (chocolates) => {
    localStorage.setItem("selectedChocolates", JSON.stringify(chocolates));
  };

  // Function to handle adding a chocolate to the custom pack
  const handleAddToPack = (chocolate) => {
    if (selectedChocolates.length < maxChocolates) {
      const updatedChocolates = [...selectedChocolates, chocolate];
      setSelectedChocolates(updatedChocolates);
      saveSelectedChocolates(updatedChocolates);
    } else {
      alert(
        "Cannot add more than 8 chocolates. Clear your local storage to add more!!"
      );
    }
  };

  // Function to handle removing a chocolate from the custom pack
  const handleRemoveFromPack = (chocolate) => {
    const updatedChocolates = selectedChocolates.filter(
      (c) => c.id !== chocolate.id
    );
    setSelectedChocolates(updatedChocolates);
    saveSelectedChocolates(updatedChocolates);
  };

  // useEffect to watch for changes in selectedChocolates and update localStorage
  useEffect(() => {
    saveSelectedChocolates(selectedChocolates);
  }, [selectedChocolates]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Custom Chocolate Pack of 8
        </h2>
        <p className=" font-medium text-lg">
          Total Price: ${totalPrice.toFixed(2)}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative product-card">
              <div className="w-full overflow-hidden rounded-md bg-gray-200">
                <div className="h-40">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md text-gray-700">{product.name}</h3>
                  <p className="text-md text-gray-500">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <div>
                  {selectedChocolates.includes(product) ? (
                    <button
                      onClick={() => handleRemoveFromPack(product)}
                      className="bg-red-500 hover:bg-red-600 text-white font-md py-2 px-4 rounded"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToPack(product)}
                      className="bg-green-500 hover:bg-green-600 text-white font-md py-2 px-4 rounded"
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
