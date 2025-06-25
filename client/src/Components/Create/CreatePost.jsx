import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const InitialPost = {
  name: '',
  description: '',
  price: '',
  category: '',
  image: '',
  createdDate: new Date()
};

export default function CreatePost() {

  const [product, setProduct] = useState(InitialPost);
  const [file, setFile] = useState('');

  const { account } = useContext(DataContext)

  const location = useLocation();

  useEffect(() => {
    const uploadImage = async () => {
      if (!!file) {

        console.log('Uploading:', file);
        console.log('Is File?', file instanceof File);

        const data = new FormData();
        data.append('file', file);
        data.append('name', file.name);

        try {
          const response = await API.uploadFile(data);
          console.log("Response checking", response)
          setProduct(prev => ({
            ...prev,
            image: response.data,
            category: location.search?.split('=')[1] || 'All',
            username: account.username || 'guest',
          }));
        } catch (err) {
          console.error('Image upload failed:', err);
        }
      }
    };
    uploadImage();
  }, [file]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Created:', product);
    // Connect this to backend or reset form if needed
  };

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Create New Product</h2>
      {/* {product.image && (
        <img
          src={product.image}
          alt="Preview"
          className="mb-4 w-full h-64 object-cover rounded-lg"
        />
      )} */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Product Name</label>
          <input
            name="name"
            type="text"
            required
            value={product.name}
            onChange={(e) => handleChange(e)}
            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Description</label>
          <textarea
            name="description"
            required
            rows={3}
            value={product.description}
            onChange={(e) => handleChange(e)}
            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Price ($)</label>
          <input
            name="price"
            type="number"
            required
            value={product.price}
            onChange={(e) => handleChange(e)}
            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Category</label>
          <select
            name="category"
            required
            value={product.category}
            onChange={(e) => handleChange(e)}
            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Upload Image</label>
          <div
            onDrop={(e) => {
              e.preventDefault();
              setFile(e.dataTransfer.files[0]);
            }}
            onDragOver={(e) => e.preventDefault()}
            className="w-full flex items-center justify-center px-4 py-10 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 cursor-pointer"
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="fileInput"
              onChange={(e) => {
                setFile(e.target.files[0])
              }}
            />
            <label htmlFor="fileInput">
              {file ? (
                <span>{file.name}</span>
              ) : (
                <span>Drag & drop or click to upload</span>
              )}
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}