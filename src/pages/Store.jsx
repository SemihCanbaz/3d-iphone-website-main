import React, { useEffect, useState } from "react";
import { models } from "../constants/index"; // Yerel verileri içe aktarın

const Store = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const fetchPhones = () => {
      try {
        // Yerel verileri kullanarak setPhones fonksiyonunu güncelleyin
        setPhones(models);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchPhones();
  }, []);

  const handleColorSelect = (model, color) => {
    setSelectedModel(model);
    setSelectedColor(color);
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">iPhone Models</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {phones.length > 0 ? (
          phones.map((phone) => (
            <div
              key={phone.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={phone.img}
                alt={phone.title}
                className="w-full h-60 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                {phone.title}
              </h2>
              <p className="text-gray-700 mb-4">Available in:</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {phone.color.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => handleColorSelect(phone, color)}
                    style={{ backgroundColor: color }}
                    className={`w-10 h-10 rounded-full border border-gray-300 cursor-pointer ${
                      selectedColor === color ? "border-2 border-blue-500" : ""
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                Select your favorite color from the above options.
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No phones available</p>
        )}
      </div>

      {selectedModel && (
        <div className="mt-10 p-6 bg-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            {selectedModel.title}
          </h2>
          <div className="flex flex-col items-center">
            <div className="relative w-full h-80 mb-4">
              <img
                src={selectedModel.img}
                alt={selectedModel.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 transform hover:scale-110"
              />
            </div>
            <div className="text-gray-700 mb-4">
              <p>
                <strong>Price:</strong> $
                {selectedModel.price || "Price not available"}
              </p>
              <p>
                <strong>RAM:</strong> {selectedModel.ram || "RAM not specified"}
              </p>
              <p>
                <strong>Storage:</strong>{" "}
                {selectedModel.storage || "Storage not specified"}
              </p>
              <p>
                <strong>Processor:</strong>{" "}
                {selectedModel.processor || "Processor details not available"}
              </p>
              <p>
                <strong>Color:</strong>{" "}
                <span className="font-bold" style={{ color: selectedColor }}>
                  {selectedColor}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;
